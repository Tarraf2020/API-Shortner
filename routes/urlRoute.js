const router = require("express").Router();
const controller = require("../controller/urlController");

router.post("/shortUrl", controller.shortUrl);
router.get("/:urlCode", controller.redirectURL);

module.exports = router;
