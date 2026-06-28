const express = require("express");
const router = express.Router();

const {
  createAdoption,
  getAllAdoptions,
  approveAdoption,
  rejectAdoption,
  getUserAdoptions
} = require("../controllers/adoptionController");

const { protect } = require("../middleware/authMiddleware");
const admin = require("../middleware/adminMiddleware");

router.post("/", protect, createAdoption);

router.get("/my", protect, getUserAdoptions);

router.get("/", protect, admin, getAllAdoptions);

router.put("/approve/:id", protect, admin, approveAdoption);
router.put("/reject/:id", protect, admin, rejectAdoption);

module.exports = router;