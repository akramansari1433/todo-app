import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Navbar from "./components/Navbar/Navbar";
import Register from "./pages/Register";
import { useState } from "react";
import Home from "./pages/Home";

function App() {
   const [user, setUser] = useState(
      JSON.parse(window.localStorage.getItem("user"))
   );
   return (
      <BrowserRouter>
         <Navbar user={user} setUser={setUser} />
         <Routes>
            <Route
               exact
               path="/login"
               element={
                  user ? <Navigate to="/" /> : <Login setUser={setUser} />
               }
            />
            <Route exact path="/register" element={<Register />} />
            <Route
               exact
               path="/"
               element={
                  user ? (
                     <Home userId={user.userId} />
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
