import React, { useState, useEffect } from "react";
import axios from "axios";
import Login from "./components/Login";
import Register from "./components/Register";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";
const API_URL = "http://localhost:5000";
const App = () => {
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  return (
    <div>
      <h1>NoteNest App</h1>
      {!token ? (
        <div>
          <Login setToken={setToken} />
          <Register setToken={setToken} />
        </div>
      ) : (
        <div>
          <AddNote token={token} />
          <NoteList token={token} />
        </div>
      )}
    </div>
  );
};
export default App;
