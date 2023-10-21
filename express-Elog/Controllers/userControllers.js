const userModel = require("../Models/User");
const validateMongodbId = require("../util/validationOfMongoid");

const fetchAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    res.status(500).json({ error: "Unable to fetch all users!" });
  }
};

const getSingleUser = async (req, res) => {
  const id = req.params.id;

  validateMongodbId(id);
  try {
    const user = await userModel.findById(id);
    const { password, ...others } = user._doc;

    // console.log(user);
    res.status(200).json(others);
  } catch (err) {
    res.status(500).json(err);
  }
};

const deleteUser = async (req, res) => {
  let id = req.params.id;
  // check the id whether is valid in the mongodb.
  validateMongodbId(id);
  try {
    const deletedUser = await userModel.findByIdAndDelete(id);
    console.log(deletedUser);
    return res.status(204).json({ message: "User deleted!" });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  fetchAllUsers,
  deleteUser,
  getSingleUser,
};
