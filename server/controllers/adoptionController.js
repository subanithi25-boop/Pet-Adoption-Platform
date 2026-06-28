const Adoption = require("../models/Adoption");
const createAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.create({
      ...req.body,
      user: req.user.id,
      status: "Pending"
    });

    res.status(201).json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getUserAdoptions = async (req, res) => {
  try {
    const data = await Adoption.find({
      user: req.user.id
    }).populate("pet");

    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
const getAllAdoptions = async (req, res) => {
  try {
    const adoptions = await Adoption.find()
      .populate("user", "name email")
      .populate("pet");

    res.status(200).json(adoptions);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const approveAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndUpdate(
      req.params.id,
      { status: "Approved", approvedAt: new Date() },
      { new: true }
    );

    res.json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const rejectAdoption = async (req, res) => {
  try {
    const adoption = await Adoption.findByIdAndUpdate(
      req.params.id,
      { status: "Rejected" },
      { new: true }
    );

    res.json(adoption);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createAdoption,
  getAllAdoptions,
  approveAdoption,
  rejectAdoption,
  getUserAdoptions
};