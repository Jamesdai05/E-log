const mongoose = require("mongoose");
const Report = require("../Models/Report");
const seedData = require("./report.json");
require("dotenv").config();

const dbName = "Engineering_Post";

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName,
});

// shortcut to mongoose.connection object
const db = mongoose.connection;

db.on("connected", function () {
  console.log(`Connected to MongoDB ${db.name} at ${db.host}:${db.port}`);
});

//seeds the data

const seedDB = async () => {
  await Report.deleteMany();
  await Report.insertMany(seedData);
  console.log("Data seeded!");
};

// const closedConnection = async () => {
//   await mongoose.connection.close();
//   console.log("Connection closed!");
// };

seedDB();
