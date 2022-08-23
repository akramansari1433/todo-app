import axios from "axios";

export const login = async (loginCred) => {
   let res = await axios.post("http://localhost:3000/signin", loginCred);
   return res.data;
};

export const addTask = async (task) => {
   let res = axios.post("http://localhost:3000/addtask", task);
   return res.data;
};

export const getAllTask = async (userId) => {
   let res = await axios.get(`http://localhost:3000/getalltask/${userId}`);
   return res.data;
};

export const deleteUserTask = async (tid) => {
   let res = await axios.delete(`http://localhost:3000/task/${tid}`);
   return res.data;
};

export const markcompleted = async (tid) => {
   let res = await axios.post(`http://localhost:3000/markcompleted/${tid}`);
   return res.data;
};

export const markInCompleted = async (tid) => {
   let res = await axios.post(`http://localhost:3000/markincompleted/${tid}`);
   return res.data;
};

export const register = async (userData) => {
   let res = await axios.post("http://localhost:3000/register", userData);
   return res.data;
};
