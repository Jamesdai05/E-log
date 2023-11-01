const catModel = require("../Models/Category");

//fetch all;

const fetchAllCategories = async (req, res) => {
  try {
    const categories = await catModel.find({});
    res.status(200).json(categories);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to get categories!" });
  }
};

const createCategory = async (req, res) => {
  try {
    const category = await catModel.create({
      user: req.user._id,
      title: req.body.title,
    });
  } catch (error) {
    res.status(code).json(error);
  }
};

module.exports = {
                   fetchAllCategories,
                    createCategory,
                  };
