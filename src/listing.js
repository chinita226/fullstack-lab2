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
    fetch("http://localhost:3000/students")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        this.setState({
          list: data,
        });
      });
  }

  render() {
    let tb_data = this.state.list.map((item) => {
      return (
        <tr key={item._id}>
          <td>{item._id}</td>
          <td>{item.FullName}</td>
          <td>{item.email}</td>
        </tr>
      );
    });

    return (
      <div>
        <table>
          <tbody>{tb_data}</tbody>
        </table>
      </div>
    );
  }
}

export default DisplayTable;
