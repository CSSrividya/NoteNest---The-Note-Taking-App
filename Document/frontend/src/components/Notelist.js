import React, { useState, useEffect } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000";
const NoteList = ({ token }) => {
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    axios
      .get(`${API_URL}/api/notes`, { headers: { Authorization: `Bearer ${token}` } })
      .then((res) => setNotes(res.data))
      .catch((err) => console.error(err));
  }, [token]);
  return (
    <div>
      <h2>Your Notes</h2>
      <ul>
        {notes.map((note) => (
          <li key={note._id}>
            <h3>{note.title}</h3>
            <p>{note.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default NoteList;
