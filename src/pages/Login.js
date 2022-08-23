import { Button, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { login } from "../helper";

export default function Login({ setUser }) {
   const [loginCred, setLoginCred] = useState();
   const [error, setError] = useState();

   const handleChange = (e) => {
      const { name, value } = e.target;
      setLoginCred((prevState) => ({
         ...prevState,
         [name]: value,
      }));
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      login(loginCred)
         .then((res) => {
            window.localStorage.setItem("user", JSON.stringify(res));
            setUser(JSON.parse(window.localStorage.getItem("user")));
            setError("");
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
               name="email"
               required
               fullWidth
               onChange={handleChange}
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Password"
               type="password"
               name="password"
               required
               fullWidth
               onChange={handleChange}
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
