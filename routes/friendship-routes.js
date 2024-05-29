const router = require("express").Router();
// const path = require("path");
const friendshipController = require("../controllers/friendship-controller");

router.get("/:id", friendshipController.friendshipDetails);

module.exports = router;
