const router = require("express").Router();
const friendshipsController = require("../controllers/friendships-controller");

router.get("/:id", friendshipsController.friendshipDetails);

module.exports = router;
