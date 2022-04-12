const mongoose = require("mongoose");

const Course = mongoose.Schema({
  course_code: {
    type: Number,
    required: true,
    unique: true,
  },
  course_name: String,
  course_descrip: String,
});

const Registration = mongoose.Schema(
  {
    courses: [Course],
  },
  {
    timestamps: true,
  }
);

const Student = mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    max: 255,
    min: 6,
  },
  password: {
    type: String,
    required: true,
    min: 8,
  },
  registration: Registration,
});

const Schema = mongoose.model("students", Student);

module.exports = Schema;
