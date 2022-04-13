const express = require("express");
const router = require("express").Router();
const cors = require("cors");
var bodyParser = require("body-parser");
//const pages = require("./routes");
const connect = require("./connection");
const Course = require("../models/Course");
const Registration = require("../models/Registration");
const Student = require("../models/Student");
//connection url
const app = express();
app.use(express.json());
connect();
app.use(cors());
//connect to mongo DB
app.use(express.static("dist"));

//app.use("/", pages);

app.post("/api/student", async (req, res) => {
  const student = new Student({
    name: req.body.name,
    email: req.body.email,
  });
  const savedUser = await student.save();
  res.send(savedUser);
});

app.post("/api/course", async (req, res) => {
  const course = new Course({
    name: req.body.name,
    description: req.body.description,
  });
  const savedCourse = await course.save();
  res.send(savedCourse);
});

app.post("/api/register", async (req, res) => {
  const student_id = req.body.student;
  const course_id = req.body.course;
  const registration = new Registration({
    student: student_id,
    course: course_id,
  });
  const savedReg = await registration.save();
  res.send(savedReg);
});

/* 
app.get("/api/register", async (req, res) => {
  await Registration.find().then((result) => res.send(result));
});
*/
app.get("/api/register", async (req, res) => {
  Registration.find()
    .populate("student")
    .populate("course")
    .exec((err, result) => {
      res.send(result);
    });
});

app.listen(3000, () => {
  console.log(`Server is running on 3000    `);
});
