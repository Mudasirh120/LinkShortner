import Url from "../model/Url.js";
export const shortenUrl = async (req, res) => {
  const url = req.body.url;
  try {
    const newUrl = new Url({ full: url });
    const savedUrl = await newUrl.save();
    res.redirect("/");
  } catch (error) {
    console.log("Error while saving Url in DB : ", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
export const redirectUrl = async (req, res) => {
  try {
    const id = req.params.id;
    const findUrl = await Url.findOne({ short: id });
    if (!findUrl) {
      res
        .status(404)
        .json({ success: false, message: "This url doesnt exist" });
    }
    findUrl.click++;
    await findUrl.save();
    res.redirect(findUrl.full);
  } catch (error) {
    console.log("Error redirecting URL: ", error);
  }
};
