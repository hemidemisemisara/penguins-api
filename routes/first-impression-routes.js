const router = require("express").Router();
const firstImpressionController = require("../controllers/first-impression-controller");
const upload = require("../config/multerConfig");

router.put("/:id", async (req, res) => {
  try {
    const timestamp = Date.now();
    upload("first-impressions", timestamp).single("image")(
      req,
      res,
      async (err) => {
        if (err) {
          console.error(err);
          return res.status(500).json({ message: "Error uploading file" });
        }
        await firstImpressionController.firstImpressionUpdate(req, res);
      }
    );
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating first impression" });
  }
});

module.exports = router;
