import React, { useState } from "react";
import axios from "axios";
const API_URL = "http://localhost:5000";
const AddNote = ({ token }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const addNote = async () => {
    try {
      await axios.post(
        `${API_URL}/api/notes`,
        { title, content },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      setTitle("");
      setContent("");
    } catch (error) {
      console.error("Error adding note", error);
    }
  };
  return (
    <div>
      <h2>Add Note</h2>
      <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
      <textarea value={content} onChange={(e) => setContent(e.target.value)} placeholder="Content"></textarea>
      <button onClick={addNote}>Add Note</button>
    </div>
  );
};
export default AddNote;
