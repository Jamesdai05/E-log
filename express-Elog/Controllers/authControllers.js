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
  let user = null;

  try {
    user = await userModel.find({ email: validatedUser.email });
    console.log(user);
    if (!user) {
      return res.status(401).json({ message: errorMsg });
    }
  } catch (err) {
    return res.status(500).json({ message: "Fail to get user!" });
  }
  const auth = await bcrypt.compare(validatedUser.password, user.password);
  if (!auth) {
    return res.json({ message: errorMsg });
  }

  const token = createSecretToken(user._id);

  res.status(201).json({
    message: "Log in Successfully!",
    success: true,
    token,
    user: user._id,
  });
};

module.exports = {
  login,
};
