import React from "react";
import { Button, TextField, Typography } from "@mui/material";

export default function Register() {
   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Registration Details
         </Typography>
         <form className="box">
            <TextField
               label="Name"
               type="text"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Email"
               type="email"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Password"
               type="password"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <TextField
               label="Confirm Password"
               type="password"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
            />
            <Button variant="contained">Register</Button>
         </form>
      </div>
   );
}
