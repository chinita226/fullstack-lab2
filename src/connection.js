const mongoose = require("mongoose");

const URL =
  "mongodb+srv://chinita226:caonima123@cluster0.qwd0z.mongodb.net/fullstackLab2New?retryWrites=true&w=majority";

function connectDB() {
  mongoose.connect(
    URL,
    { useUnifiedTopology: true, useNewUrlParser: true },
    () => {
      console.log("Connected to the whole world with my Database!");
    }
  );
}

module.exports = connectDB;
