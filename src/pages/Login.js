import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function Login({ setUser }) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [error, setError] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:3000/signin", { email, password })
         .then((res) => {
            if (res.data) {
               window.localStorage.setItem("user", JSON.stringify(res.data));
               setUser(JSON.parse(window.localStorage.getItem("user")));
               setError("");
            }
         })
         .catch((err) => {
            setError(err.response.data.error);
            console.log(err);
         });
   };

   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Login Details
         </Typography>
         <form className="box" onSubmit={handleSubmit}>
            <TextField
               label="Email"
               type="email"
               required
               fullWidth
               onChange={(e) => setEmail(e.target.value)}
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Password"
               type="password"
               required
               fullWidth
               onChange={(e) => setPassword(e.target.value)}
               sx={{ marginBottom: 3 }}
            />
            <Button variant="contained" type="submit">
               Login
            </Button>
            <Typography mt={2} color="error">
               {error}
            </Typography>
         </form>
      </div>
   );
}
