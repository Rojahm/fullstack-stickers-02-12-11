import mongoose from "mongoose";
const StickerSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  imageLink: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  show: {
    type: Boolean,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  pack: {
    type: String,
    required: true,
  },
  tags: {
    type: Array,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  publishDate: {
    type: String,
    default: new Date().toLocaleDateString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
  editDate: {
    type: String,
    default: new Date().toLocaleDateString("fa-IR", {
      hour: "2-digit",
      minute: "2-digit",
    }),
  },
});
const Sticker =
  mongoose.models.Sticker || mongoose.model("Sticker", StickerSchema);
// module.exports = mongoose.model("Sticker", Sticker);
export default Sticker;
