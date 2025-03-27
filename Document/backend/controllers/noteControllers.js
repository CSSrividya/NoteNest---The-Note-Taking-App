const Note = require("../models/Note");
exports.getNotes = async (req, res) => {
  try {
    const notes = await Note.find({ userId: req.user.id });
    res.json(notes);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.addNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    const newNote = new Note({ userId: req.user.id, title, content });
    await newNote.save();
    res.json(newNote);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.updateNote = async (req, res) => {
  const { title, content } = req.body;
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });
    if (note.userId.toString() !== req.user.id) return res.status(401).json({ msg: "Unauthorized" });
    note.title = title;
    note.content = content;
    await note.save();
    res.json(note);
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
exports.deleteNote = async (req, res) => {
  try {
    let note = await Note.findById(req.params.id);
    if (!note) return res.status(404).json({ msg: "Note not found" });
    if (note.userId.toString() !== req.user.id) return res.status(401).json({ msg: "Unauthorized" });
    await note.remove();
    res.json({ msg: "Note deleted" });
  } catch (err) {
    res.status(500).send("Server Error");
  }
};
