const mongoose = require("mongoose");

const validateMongodbId = (id) => {
  const isValidateMongodbId = mongoose.Types.ObjectId.isValid(id);
  if (!isValidateMongodbId) throw new Error("Mongodb ID is not valid or found!");
};

module.exports = validateMongodbId;
