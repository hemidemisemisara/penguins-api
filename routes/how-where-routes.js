const router = require("express").Router();
const howWhereController = require("../controllers/how-where-controller");
const upload = require("../config/multerConfig");

// router.put("/:id", async (req, res, next) => {
//   let date = Date.now();
//   await upload("how-where", date).single("image")(req, res, next);
//   await howWhereController.howWhereUpdate(req, res, date);
// });

router.put("/:id", async (req, res) => {
  let date = Date.now();
  await upload("how-where", date).single("image")(req, res, async (err) => {
    if (err) {
      // Handle Multer error
      console.error(err);
      return res.status(500).json({ message: "Error uploading file" });
    }
    // Call the controller method after Multer finishes processing
    await howWhereController.howWhereUpdate(req, res, date);
  });
});

module.exports = router;
