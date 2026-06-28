const Pet = require("../models/Pet");

// ================= ADD PET =================
const addPet = async (req, res) => {
  try {
    const petData = {
      ...req.body
    };

    // Save uploaded image URL
    if (req.file) {
      petData.image =
        `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const pet = await Pet.create(petData);

    res.status(201).json({
      message: "Pet added successfully",
      pet
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= GET ALL PETS =================
const getAllPets = async (req, res) => {
  try {
    const pets = await Pet.find();

    res.status(200).json(pets);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= GET SINGLE PET =================
const getPetById = async (req, res) => {
  try {
    const pet = await Pet.findById(req.params.id);

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    res.status(200).json(pet);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= UPDATE PET =================
const updatePet = async (req, res) => {
  try {
    const updateData = {
      ...req.body
    };

    // Update image if new file uploaded
    if (req.file) {
      updateData.image =
        `http://localhost:5000/uploads/${req.file.filename}`;
    }

    const pet = await Pet.findByIdAndUpdate(
      req.params.id,
      updateData,
      {
        new: true
      }
    );

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    res.status(200).json({
      message: "Pet updated successfully",
      pet
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= DELETE PET =================
const deletePet = async (req, res) => {
  try {
    const pet = await Pet.findByIdAndDelete(
      req.params.id
    );

    if (!pet) {
      return res.status(404).json({
        message: "Pet not found"
      });
    }

    res.status(200).json({
      message: "Pet deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addPet,
  getAllPets,
  getPetById,
  updatePet,
  deletePet
};