const Favorite = require("../models/Favorite");

// ================= ADD FAVORITE =================
const addFavorite = async (req, res) => {
  try {
    const { pet } = req.body;

    const existing = await Favorite.findOne({
      user: req.user._id,
      pet
    });

    if (existing) {
      return res.status(400).json({
        message: "Pet already in favorites"
      });
    }

    const favorite = await Favorite.create({
      user: req.user._id,
      pet
    });

    res.status(201).json({
      message: "Added to favorites",
      favorite
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= GET FAVORITES =================
const getFavorites = async (req, res) => {
  try {
    const favorites = await Favorite.find({
      user: req.user._id
    }).populate("pet");

    res.status(200).json(favorites);
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

// ================= REMOVE FAVORITE =================
const removeFavorite = async (req, res) => {
  try {
    const petId = req.params.id;

    await Favorite.findOneAndDelete({
      user: req.user._id,
      pet: petId
    });

    res.status(200).json({
      message: "Removed from favorites"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

module.exports = {
  addFavorite,
  getFavorites,
  removeFavorite
};