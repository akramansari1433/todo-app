import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

export default function Navbar({ userId, setUserId }) {
   const handleLogout = () => {
      window.localStorage.setItem("userId", "");
      setUserId(window.localStorage.getItem("userId"));
   };
   return (
      <Box sx={{ flexGrow: 1 }}>
         <AppBar position="static">
            <Toolbar>
               <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                  Todo App
               </Typography>
               {userId ? (
                  <Button color="inherit" onClick={handleLogout}>
                     Logout
                  </Button>
               ) : (
                  <>
                     <Button color="inherit" component={Link} to="/login">
                        Login
                     </Button>
                     <Button color="inherit" component={Link} to="/register">
                        Register
                     </Button>
                  </>
               )}
            </Toolbar>
         </AppBar>
      </Box>
   );
}
