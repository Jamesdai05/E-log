const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userModel = require("../Models/User");
const userValidator = require("../joi-validators/userValidate");
const { createSecretToken } = require("../util/SecretToken");

const login = async (req, res) => {
  let errorObject = {};

  const userValidatorResults = userValidator.loginValidator.validate(req.body, {
    abortEarly: false,
  });
  if (userValidatorResults.error) {
    //return the details of the error in json
    const validationError = userValidatorResults.error.details;

    validationError.forEach((error) => {
      errorObject[error.context.key] = error.message;
    });
    return res.status(400).json(errorObject);
  }

  const validatedUser = req.body;
  let errorMsg = "Incorrect password or email";
  let user;

  try {
    user = await userModel.findOne({ email: validatedUser.email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: errorMsg });
    }
  } catch (err) {
    return res.status(500).json({ message: "Fail to get user!" });
  }
  const auth = await bcrypt.compare(validatedUser.password, user.password);
  if (!auth) {
    return res.status(401).json({ message: errorMsg });
  }

  const token = createSecretToken(user._id);

  res.status(201).json({
    message: "Log in Successfully!",
    success: true,
    token,
    user: user._id,
    name: user.username,
  });
};

//Register controller
const register = async (req, res) => {
  let errorObject = {};
  //check the input of user schema.
  const userValidatorResults = userValidator.registerValidator.validate(
    req.body,
    {
      abortEarly: false,
    }
  );
  if (userValidatorResults.error) {
    //return the details of the error in json
    const validationError = userValidatorResults.error.details;

    validationError.forEach((error) => {
      errorObject[error.context.key] = error.message;
    });
    // console.log(errorObject);
    return res.status(400).json(errorObject);
  }
  // check the user exists or not in the database.
  let validatedUser = userValidatorResults;

  try {
    validatedUser = await userModel.findOne({
      email: validatedUser.value.email,
    });
    // console.log(validatedUser);
    if (validatedUser) {
      return res.status(409).json({ message: "User exists" });
    }
  } catch (err) {
    console.log(err);
    return res.status(500).json({ message: "Fail to get user!" });
  }

  const passHash = await bcrypt.hash(req.body.password, 10);
  const user = { ...req.body, password: passHash };

  try {
    await userModel.create(user);
    return res.status(201).json({ message: "User created!" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "failed to created user!" });
  }
};

module.exports = {
  login,
  register,
};
