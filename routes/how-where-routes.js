const router = require("express").Router();
const howWhereController = require("../controllers/how-where-controller");
const upload = require("../config/multerConfig");

router.put("/:id", async (req, res) => {
  // use timestamp for the image file name
  let timestamp = Date.now();
  //   upload photo to the public folder
  await upload("how-where", timestamp).single("image")(
    req,
    res,
    async (err) => {
      // wait until the upload is completed, and if there is any error
      if (err) {
        console.error(err);
        return res.status(500).json({ message: "Error uploading file" });
      }
      // move on to the controllerand update database's data
      await howWhereController.howWhereUpdate(req, res);
    }
  );
});

module.exports = router;
