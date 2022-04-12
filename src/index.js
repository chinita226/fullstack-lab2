import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import React, { Component } from "react";
import DisplayTable from "./listing";
import { getStudents } from "./fetchapi";
/* 
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
  
}
const element = <Welcome name="I changed" />;
ReactDOM.render(element, document.getElementById("index"));*/

const container = document.getElementById("index");
const root = createRoot(container);
root.render(<DisplayTable />);

/* 
const App = () => {
  React.useEffect(() => {
    getStudents().then((data) => console.log(data));
  }, []);
  return <div></div>;
};*/

export default App;
