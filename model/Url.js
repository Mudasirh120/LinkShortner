import mongoose, { Types } from "mongoose";
import { generateId } from "../util/idgenerator.js";
const urlSchema = new mongoose.Schema({
  full: { type: String, required: true },
  short: { type: String, required: true, default: generateId },
  click: { type: Number, required: true, default: 0 },
});
const Url = mongoose.model("Url", urlSchema);
export default Url;
