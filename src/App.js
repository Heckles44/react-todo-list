import React from "react";
import uuid from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput.js";
import TodoList from "./components/TodoList.js";

function App() {
  return (
    // <div className="App">
    //   <h1>hello from app</h1>
    // </div>
    <div>
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    </div>
  );
}

export default App;
