import dotenv from "dotenv";
dotenv.config();
import path from "path";
import express from "express";
import { fileURLToPath } from "url";
import { dirname } from "path";
import { connectDb } from "./config/db.js";
import urlRouter from "./routes/UrlRoutes.js";
import Url from "./model/Url.js";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = express();
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/url", urlRouter);
app.get("/", async (req, res) => {
  const Urls = await Url.find();
  res.render("index", { Urls: Urls });
});
connectDb();

export default app;
