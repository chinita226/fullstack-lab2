const express = require("express");
const cors = require("cors");
var bodyParser = require("body-parser");
const student = require("./Schema");

const pages = require("./routes");
const connect = require("./connection");

//connection url
const app = express();
app.use(cors());
//connect to mongo DB
app.use(express.static("dist"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/", pages);

app.listen(3000, () => {
  connect();
  /*
  new student({
    FullName: "test student 5",
    email: "test_student5@qq.com",
    password: "password123",
    registration: {
      courses: [
        {
          course_code: 200,
          course_name: "test react",
          course_descrip: "react3 test course",
        },
      ],
    },
  }).save();
  */
  console.log(`Server is running on 3000    `);
});
