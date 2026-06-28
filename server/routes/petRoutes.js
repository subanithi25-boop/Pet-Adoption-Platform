const express = require("express");
const router = express.Router();

const upload =
  require("../middleware/uploadMiddleware");

const {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet
} = require("../controllers/petController");

const {
  protect
} = require("../middleware/authMiddleware");

const admin =
  require("../middleware/adminMiddleware");

router.get("/", getAllPets);
router.get("/:id", getPetById);

router.post(
  "/",
  protect,
  admin,
  upload.single("image"),
  addPet
);

router.put(
  "/:id",
  protect,
  admin,
  upload.single("image"),
  updatePet
);

router.delete(
  "/:id",
  protect,
  admin,
  deletePet
);

module.exports = router;