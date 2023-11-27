const Url = require("../models/urlModel");
const shortid = require("shortid");

exports.shortUrl = async (req, res) => {
  const { originalUrl } = req.body;

  try {
    // check if url exist
    let url = await Url.findOne({ originalUrl });

    if (!url) {
      // generate 6 char
      let urlCode = shortid.generate({ length: 6 });
      let shortUrl = `${req.protocol}://${req.get(
        "host"
      )}/api/v1/url/${urlCode}`;
      url = new Url({
        originalUrl,
        urlCode,
        shortUrl,
      });
      await url.save();
    }
    return res
      .status(201)
      .json({ message: "Short url created successfully.", data: url.shortUrl });
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: "Internal server error.",
    });
  }
};

exports.redirectURL = async (req, res) => {
  const { urlCode } = req.params;

  try {
    const url = await Url.findOne({ urlCode });
    if (!url) {
      return res.status(404).json({
        message: "Url not found.",
      });
    }
    // Ensure the URL is an absolute URL with a protocol
    const absoluteUrl =
      url.originalUrl.startsWith("http://") ||
      url.originalUrl.startsWith("https://")
        ? url.originalUrl
        : `http://${url.originalUrl}`;

    res.redirect(absoluteUrl);
    // res.redirect(url.originalUrl);
  } catch (error) {
    console.log({ error });
    res.status(500).json({
      message: "Internal server error.",
    });
  }
};
