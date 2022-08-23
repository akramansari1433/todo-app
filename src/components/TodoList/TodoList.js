import { Box, IconButton, Paper, TextField, Typography } from "@mui/material";
import AddBoxIcon from "@mui/icons-material/AddBox";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Task from "../Task/Task";
import "./TodoList.css";

export default function TodoList({ userId }) {
   const [userTasks, setUserTasks] = useState([]);
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

   useEffect(() => {
      axios
         .get(`http://localhost:3000/getalltask/${userId}`)
         .then((res) => {
            setUserTasks(res.data);
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
            <Paper elevation={3} sx={{ py: 5, px: 3 }}>
               <form
                  onSubmit={handleAddTask}
                  style={{
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                  }}
               >
                  <TextField
                     variant="outlined"
                     className="inputRounded"
                     size="small"
                     required
                     onChange={(e) => setTask({ tname: e.target.value })}
                  />
                  <IconButton color="success" type="submit">
                     <AddBoxIcon fontSize="large" />
                  </IconButton>
               </form>

               {userTasks.map((t) => (
                  <Task t={t} key={t.tid} />
               ))}
            </Paper>
         </Box>
      </div>
   );
}
