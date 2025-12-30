const router = require("express").Router();
const { getServices } = require("../controllers/service.controller");

router.get("/", getServices);

module.exports = router;
