import { Box, Checkbox, IconButton, Typography } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import React from "react";
import { deleteUserTask, markcompleted, markInCompleted } from "../../helper";

export default function Task({ t }) {
   const deleteTask = (tid) => {
      deleteUserTask(tid)
         .then((res) => {
            console.log(res);
            window.location.reload();
         })
         .catch((error) => {
            console.log(error);
         });
   };

   const handleCheck = (e, tid) => {
      if (e.target.checked) {
         markcompleted(tid)
            .then((res) => {
               console.log(res);
               window.location.reload();
            })
            .catch((error) => {
               console.log(error);
            });
      } else {
         markInCompleted(tid)
            .then((res) => {
               console.log(res);
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

         <Typography
            variant="h5"
            sx={{ textDecoration: t.completed && "line-through" }}
         >
            {t.tname}
         </Typography>

         <IconButton color="error" onClick={() => deleteTask(t.tid)}>
            <DeleteIcon fontSize="medium" />
         </IconButton>
      </Box>
   );
}
