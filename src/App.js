import React, { useEffect, useState } from "react";
import useInterval from "./refresh";

const App = () => {
  //console.log("Here..");
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [sortDir, setSortDir] = useState("DESC");
  const [sort, setSort] = useState("student_name");

  function fetchData() {
    fetch("http://localhost:3000/api/register")
      .then((response) => response.json())
      .then((data) => {
        setData(data);
      })
      //catch error and set error array to be true
      .catch((err) => setHasError(true));
    console.log(hasError);
  }
  useEffect(() => {
    fetchData();
  }, []);

  useInterval(() => {
    fetchData();
    console.log("inside interval.");
  }, 60 * 1000);

  useEffect(() => {
    if (sort === "student_id") {
      setData((current) => sortArray(current, "student", "_id", sortDir));
    }
    if (sort === "student_email") {
      //console.log("inside if student email");
      setData((current) => sortArray(current, "student", "email", sortDir));
    }
    if (sort === "student_name") {
      //console.log("inside if student name");
      setData((current) => sortArray(current, "student", "name", sortDir));
    }
    if (sort === "course_name") {
      //console.log("inside if course name");
      setData((current) => sortArray(current, "course", "name", sortDir));
    }
    if (sort === "registration_date") {
      //console.log("inside if registration..");
      setData((current) => sortArray(current, "registration_date", sortDir));
    }
    if (sort === "course_id") {
      //console.log("inside if registration..");
      setData((current) => sortArray(current, "course", "_id", sortDir));
    }
  }, [sortDir, sort]);

  const sortArray = (array, value, key, direction) => {
    let sorted = [...array].sort((a, b) => {
      if (a[value][key] < b[value][key]) {
        return -1;
      }
      if (a[value][key] > b[value][key]) {
        return 1;
      }
      return 0;
    });
    return direction === "ASC" ? sorted : sorted.reverse();
  };

  const handleClick = (e) => {
    e.preventDefault();
    //console.log(e.target.id);
    if (sort === e.target.id) {
      setSortDir((direction) => (direction === "ASC" ? "DESC" : "ASC"));
    } else {
      setSort(e.target.id);
      setSortDir("ASC");
    }
  };

  const [register, setRegister] = useState({
    student: "",
    course: "",
  });

  const handle = (e) => {
    const newData = { ...register };
    newData[e.target.id] = e.target.value;
    setRegister(newData);
    console.log(newData);
  };

  const submit = (e) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(register),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={(e) => submit(e)}>
        <input
          onChange={(e) => handle(e)}
          id="student"
          value={register.student}
          placeholder="Student ID"
          type="text"
        />
        <label>Course ID</label>
        <input
          onChange={(e) => handle(e)}
          id="course"
          value={register.course}
          placeholder="Course ID"
          type="text"
        />
        <button>Submit</button>
      </form>

      <table>
        <thead>
          <tr onClick={(e) => handleClick(e)}>
            <th>
              <a href="" id="student_id">{`Student ID`}</a>
            </th>
            <th>
              <a href="" id="student_name">{`Student Name`}</a>
            </th>
            <th>
              <a href="" id="student_email">{`Student Email`}</a>
            </th>
            <th>
              <a href="" id="course_name">{`Course Name`}</a>
            </th>
            <th>
              <a href="" id="registration_date">{`Registration Time`}</a>
            </th>
            <th>
              <a href="" id="course_id">{`Course ID`}</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item.student._id}</td>
                <td>{item.student.name}</td>
                <td>{item.student.email}</td>
                <td>{item.course.name}</td>
                <td>{item.registration_date}</td>
                <td>{item.course._id}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default App;
