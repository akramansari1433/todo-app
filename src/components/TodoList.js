import {
   Box,
   Checkbox,
   IconButton,
   Paper,
   TextField,
   Typography,
} from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import DeleteIcon from "@mui/icons-material/Delete";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function TodoList({ userId }) {
   const [tasks, setTasks] = useState([]);
   const [task, setTask] = useState({ tname: "", userId: "" });

   const handleAddTask = (e) => {
      axios
         .post("http://localhost:3000/addtask", {
            tname: task.tname,
            userId: userId,
         })
         .then((res) => {
            console.log(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
      e.target.reset();
   };

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

   useEffect(() => {
      axios
         .get(`http://localhost:3000/getalltask/${userId}`)
         .then((res) => {
            setTasks(res.data);
            console.log(res.data);
         })
         .catch((error) => {
            console.log(error);
         });
   }, [userId]);

   return (
      <div>
         <Typography variant="h3" textAlign="center" my={4}>
            Todo List
         </Typography>
         <Box display="flex" justifyContent="center" alignItems="center">
            <Paper elevation={2} sx={{ padding: 5 }}>
               <Box display="flex" justifyContent="center" alignItems="center">
                  <form onSubmit={handleAddTask}>
                     <TextField
                        variant="outlined"
                        className="inputRounded"
                        size="small"
                        required
                        onChange={(e) => setTask({ tname: e.target.value })}
                     />
                     <IconButton color="warning" type="submit">
                        <AddBoxIcon fontSize="large" />
                     </IconButton>
                  </form>
               </Box>
               {tasks.map((t) => (
                  <Box
                     display="flex"
                     justifyContent="space-between"
                     alignItems="center"
                     mt={2}
                     sx={{ border: "0.5px solid black", borderRadius: "20px" }}
                     key={t.tid}
                  >
                     <Checkbox
                        checked={t.completed === 1}
                        onChange={(e) => handleCheck(e, t.tid)}
                     />
                     {t.completed ? (
                        <Typography
                           variant="h5"
                           sx={{ textDecoration: "line-through" }}
                        >
                           {t.tname}
                        </Typography>
                     ) : (
                        <Typography variant="h5">{t.tname}</Typography>
                     )}

                     <IconButton
                        color="error"
                        onClick={() => deleteTask(t.tid)}
                     >
                        <DeleteIcon fontSize="medium" />
                     </IconButton>
                  </Box>
               ))}
            </Paper>
         </Box>
      </div>
   );
}
