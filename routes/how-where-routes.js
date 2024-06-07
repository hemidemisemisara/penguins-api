const router = require("express").Router();
const howWhereController = require("../controllers/how-where-controller");
const upload = require("../config/multerConfig");

router.put("/:id", async (req, res) => {
  try {
    const timestamp = Date.now();
    upload("how-where", timestamp).single("image")(req, res, async (err) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error uploading file" });
      }
      await howWhereController.howWhereUpdate(req, res);
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating how & where we met" });
  }
});

module.exports = router;
