import React, { useState } from "react";

class DisplayTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
    this.callAPI = this.callAPI.bind(this);
    this.callAPI();
  }

  callAPI() {
    fetch("http://localhost:3000/api/register")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      });
  }

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
  //   const [sortedField, setSortedField] = React.useState(null);
  //   setSortedField("name");
  // };

  render() {
    return (
      <div>
        <table>
          <thead>
            <tr>
              <th>{`Student ID`}</th>
              <th>
                <a
                  href=""
                  onChange={(e) => setSortType(e.target.value)}
                  value="student"
                >{`Student Name`}</a>
              </th>
              <th>
                <a
                  href=""
                  onChange={this.handleEvent}
                  value="student"
                >{`Student Email`}</a>
              </th>
              <th>
                <a
                  href=""
                  onChange={this.handleEvent}
                  value="course"
                >{`Course Name`}</a>
              </th>
              <th>
                <a
                  href=""
                  onChange={this.handleEvent}
                  value="registration_date"
                >{`Registration Time`}</a>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.list.map((item) => {
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
  }
}

export default DisplayTable;
