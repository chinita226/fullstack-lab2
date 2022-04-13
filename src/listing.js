import React, { useEffect, useState } from "react";
// var sortJsonArray = require("sort-json-array");
// class DisplayTable extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       list: [],
//     };
//     this.callAPI = this.callAPI.bind(this);
//     this.callAPI();
//   }

const App = () => {
  //console.log("Here..");
  const [data, setData] = useState([]);
  const [hasError, setHasError] = useState(false);
  const [sortType, setSortType] = useState("student");

  useEffect(() => {
    fetch("http://localhost:3000/api/register")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((err) => setHasError(true));
  }, []);

  // const handleChange = () => {
  //   console.log("Inside handle..");
  //   console.log(sortJsonArray(data, "_id", "des"));
  // };
  // useEffect(() => {
  //   console.log("inside second effect");
  //   const sortArray = (type) => {
  //     const types = {
  //       student: "student",
  //       course: "course",
  //       registration_date: "registration_date",
  //     };
  //     console.log(types);
  //     const sortProperty = types[type];
  //     const sorted = [...data].sort((a, b) => {
  //       if (sortProperty === "student") {
  //         return a.student.name.localeCompare(b.student.name);
  //       } else {
  //         return b[sortProperty] - a[sortProperty];
  //       }
  //     });
  //     setData(sorted);
  //     console.log(data);
  //   };

  //   sortArray(sortType);
  // }, [sortType]);

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>{`Student ID`}</th>
            <th>
              <a href="" value="student_name">{`Student Name`}</a>
            </th>
            <th>
              <a href="" value="student_email">{`Student Email`}</a>
            </th>
            <th>
              <a href="" value="course_name">{`Course Name`}</a>
            </th>
            <th>
              <a href="" value="registration_date">{`Registration Time`}</a>
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => {
            return (
              <tr key={item._id}>
                <td>{item._id}</td>
                <td>{item.student.name}</td>
                <td>{item.student.email}</td>
                <td>{item.course.name}</td>
                <td>{item.registration_date}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

// sortByProperty(property) {
//   return function (a, b) {
//     if (a[property] > b[property]) return 1;
//     else if (a[property] < b[property]) return -1;

//     return 0;
//   };
// }

// handleEvent = (e) => {
//   e.preventDefault();
//   console.log(e.target);
//   // sort this.list to arrange based on name

// };

// render() {

export default App;
