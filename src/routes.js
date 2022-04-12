const router = require("express").Router();

const { async } = require("regenerator-runtime");
const student = require("./Schema");

router.get("/students", async (req, res) => {
  try {
    const students = await student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

/* 
router.post("/register", async (req, res) => {
  console.log("debugging");

  const newStudent = new student({
    FullName: req.body.FullName,
    email: req.body.email,
    password: req.body.password,
    registration: {
      courses: {
        course_code: req.body.course_code,
        course_name: req.body.course_name,
        course_descrip: req.body.course_descrip,
      },
    },
  });
  try {
    //save new user and return all users
    console.log("Here saving" + newStudent);
    await newStudent.save();
    const students = await student.find();
    res.status(202).json(students);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});
*/
module.exports = router;
