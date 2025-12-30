const router = require("express").Router();
const { protect } = require("../middleware/auth.middleware");
const upload = require("../middleware/upload.middleware");
const {
  createAppointment,
  getMyAppointments,
} = require("../controllers/appointment.controller");

router.post("/", protect, upload.single("report"), createAppointment);
router.get("/", protect, getMyAppointments);

module.exports = router;
