import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Modal from "@mui/material/Modal";

const style = {
   position: "absolute",
   top: "50%",
   left: "50%",
   transform: "translate(-50%, -50%)",
   width: 300,
   bgcolor: "background.paper",
   border: "2px solid #000",
   boxShadow: 24,
   p: 4,
};

export default function Register() {
   const [name, setName] = useState();
   const [email, setEmail] = useState();
   const [password, setPassword] = useState();
   const [confirmPassword, setConfirmPassword] = useState();

   const [response, setResponse] = useState();
   const [error, setError] = useState();

   const [open, setOpen] = React.useState(false);
   const handleOpen = () => setOpen(true);
   const handleClose = () => setOpen(false);

   const navigate = useNavigate();

   const handleSubmit = (e) => {
      e.preventDefault();
      if (password !== confirmPassword) {
         setError("Password must be same!");
      } else {
         axios
            .post("http://localhost:3000/register", {
               email,
               password,
               name,
            })
            .then((res) => {
               if (res.data.message) {
                  handleOpen();
                  setResponse(res.data.message);
               }
            })
            .catch((err) => {
               setError(err.response.data.error);
               console.log(err);
            });
      }
   };

   return (
      <div>
         <Typography variant="h4" my={4} textAlign="center">
            Registration Details
         </Typography>
         <form className="box" onSubmit={handleSubmit}>
            <TextField
               label="Name"
               type="text"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
               onChange={(e) => setName(e.target.value)}
            />
            <TextField
               label="Email"
               type="email"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
               onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
               label="Password"
               type="password"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
               onChange={(e) => setPassword(e.target.value)}
            />
            <TextField
               label="Confirm Password"
               type="password"
               required
               fullWidth
               sx={{ marginBottom: 3 }}
               onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <Button variant="contained" type="submit">
               Register
            </Button>
            <Typography mt={2} color="error">
               {error}
            </Typography>
         </form>

         <Modal open={open} onClose={handleClose}>
            <Box sx={style} display="flex" justifyContent="center">
               <Typography color="green" sx={{ my: 2 }}>
                  {response}
               </Typography>
               <Button onClick={() => navigate("/login")}>Login</Button>
            </Box>
         </Modal>
      </div>
   );
}
