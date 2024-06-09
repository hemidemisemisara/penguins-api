const router = require("express").Router();
const thingsInCommonController = require("../controllers/things-in-common-controller");

router.route("/").post(thingsInCommonController.addThing);
router.route("/:id").delete(thingsInCommonController.deleteThing);

module.exports = router;
