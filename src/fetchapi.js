import "regenerator-runtime/runtime";

export const getStudents = async () => {
  console.log("I am here..");
  return await fetch("http://localhost:3000/students").then((res) =>
    res.json()
  );
};
