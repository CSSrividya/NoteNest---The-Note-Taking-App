const NoteSchema = new mongoose.Schema({
    userId: mongoose.Schema.Types.ObjectId,
    title: String,
    content: String,
    createdAt: { type: Date, default: Date.now },
  });
  module.exports = mongoose.model("Note", NoteSchema);
