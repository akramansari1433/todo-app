import React from "react";
import TodoList from "../components/TodoList/TodoList";

function Home({ userId }) {
   return <TodoList userId={userId} />;
}

export default Home;
