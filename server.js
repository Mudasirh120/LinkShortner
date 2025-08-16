import dotenv from "dotenv";
dotenv.config();
import express from "express";
import urlRouter from "./routes/UrlRoutes.js";
import { connectDb } from "./config/db.js";
import Url from "./model/Url.js";
const app = express();
app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/url", urlRouter);
app.get("/", async (req, res) => {
  const Urls = await Url.find();
  res.render("index", { Urls: Urls });
});
connectDb();

export default app;
// app.listen("5001", () => {
//   console.log("Server is running at http://localhost:5001");
// });
