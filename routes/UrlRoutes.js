import e from "express";
import { shortenUrl, redirectUrl } from "../controllers/UrlController.js";
const urlRouter = e.Router();
urlRouter.post("/shorten", shortenUrl);
urlRouter.get("/:id", redirectUrl);
export default urlRouter;
