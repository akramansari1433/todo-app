import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import axios from "axios";

export default function Task({ t }) {
   const deleteTask = (tid) => {
      axios
         .delete(`http://localhost:3000/task/${tid}`)
         .then((res) => {
            console.log(res.data);
            window.location.reload();
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleCheck = (e, tid) => {
      if (e.target.checked) {
         axios
            .post(`http://localhost:3000/markcompleted/${tid}`)
            .then((res) => {
               console.log(res.data);
               window.location.reload();
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         axios
            .post(`http://localhost:3000/markincompleted/${tid}`)
            .then((res) => {
               console.log(res.data);
               window.location.reload();
            })
            .catch((error) => {
               console.log(error);
            });
      }
   };
   return (
      <Box
         display="flex"
         justifyContent="space-between"
         alignItems="center"
         mt={2}
         sx={{
            border: "0.5px solid blue",
            borderRadius: "20px",
         }}
      >
         <Checkbox
            color="info"
            checked={t.completed === 1}
            onChange={(e) => handleCheck(e, t.tid)}
         />
         {t.completed ? (
            <Typography variant="h5" sx={{ textDecoration: "line-through" }}>
               {t.tname}
            </Typography>
         ) : (
            <Typography variant="h5">{t.tname}</Typography>
         )}

         <IconButton color="error" onClick={() => deleteTask(t.tid)}>
            <DeleteIcon fontSize="medium" />
         </IconButton>
      </Box>
   );
}
