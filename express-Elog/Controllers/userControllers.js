const userModel = require("../Models/User");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Unable to fetch all users!" });
  }
};

module.exports = {
  fetchAllUsers,
};
