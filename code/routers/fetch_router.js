const express = require("express");
const router = express.Router();

const fetch_controller = require("../controllers/fetch_controller");

router.get("/", fetch_controller.index);
router.get("/conversion", fetch_controller.conversion);
router.get("/aggregate", fetch_controller.aggregate);

module.exports = router;