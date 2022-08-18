import { Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

export default function Login({ setUserId }) {
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();

   const handleSubmit = (e) => {
      e.preventDefault();
      axios
         .post("http://localhost:3000/signin", { email, password })
         .then((res) => {
            if (res.data.message) {
               window.localStorage.setItem("userId", res.data.userId);
               setUserId(window.localStorage.getItem("userId"));
               console.log(res.data.message);
            }
         })
         .catch((error) => {
            console.log(error);
         });
      e.target.reset();
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
         </form>
      </div>
   );
}
