const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const { getProfile } = require("../controllers/user.controller");

router.get("/me", protect, getProfile);

module.exports = router;
