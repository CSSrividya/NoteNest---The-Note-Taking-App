const express = require("express");
const { getNotes, addNote, updateNote, deleteNote } = require("../controllers/noteController");
const authMiddleware = require("../middleware/auth");
const router = express.Router();
router.get("/", authMiddleware, getNotes);
router.post("/", authMiddleware, addNote);
router.put("/:id", authMiddleware, updateNote);
router.delete("/:id", authMiddleware, deleteNote);
module.exports = router;
