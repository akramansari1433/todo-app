import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
   const [userId, setUserId] = useState(window.localStorage.getItem("userId"));
   return (
      <BrowserRouter>
         <Navbar userId={userId} setUserId={setUserId} />
         <Routes>
            <Route
               exact
               path="/login"
               element={
                  userId ? <Navigate to="/" /> : <Login setUserId={setUserId} />
               }
            />
            <Route exact path="/register" element={<Register />} />
            <Route
               exact
               path="/"
               element={
                  userId ? (
                     <TodoList userId={userId} />
                  ) : (
                     <Navigate to="/login" />
                  )
               }
            />
         </Routes>
      </BrowserRouter>
   );
}

export default App;
