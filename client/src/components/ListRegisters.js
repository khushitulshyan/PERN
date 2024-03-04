import React,{Fragment, useEffect, useState} from "react";

import EditRegister from "./EditRegister";

const ListRegisters = () => {

  const [registers, setRegisters] = useState([]);

  //delete function
const deleteRegister = async stdid => {
    try {
      const deleteRegister = await fetch(`http://localhost:5000/registers/${stdid}`, {
        method: "DELETE"
      });

      setRegisters(registers.filter(registerzone => registerzone.stdid !== stdid))

    } catch (err) {
      console.error(err.message)
  }
}

const getRegisters = async () => {
  try {
    
    const response = await fetch("http://localhost:5000/registers")
    const jsonData = await response.json()
    setRegisters(jsonData);
  } catch (err) {
    console.error(err.message);
  }
};

  useEffect(() => {
    getRegisters();
  }, []);

  console.log(registers);

  return (
  <Fragment>
    {" "}
    <table className="table mt-5 text-center table-success table-striped">
  <thead>
    <tr>
      <th scope="col">SID</th>
      <th scope="col">Full Name</th>
      <th scope="col">Sport acquired</th>
      <th scope="col">date</th>
      <th scope="col">time</th>
      <th scope="col">Location</th>
      <th scope="col">floor</th>
      <th scope="col">Edit</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>

    {registers.map(registerzone => (
      <tr key = {registerzone.stdid}>
        <td>{registerzone.stdid}</td>
        <td>{registerzone.fullname}</td>
        <td>{registerzone.sport_acquired}</td>
        <td>{registerzone.date}</td>
        <td>{registerzone.time}</td>
        <td>{registerzone.office_tower}</td>
        <td>{registerzone.floor}</td>
        <td>
          <EditRegister registerzone = {registerzone}/>
        </td>
        <td>
          <button className="btn btn-danger" 
          onClick={() => deleteRegister(registerzone.stdid)}
          >
              Delete
          </button>
          </td>
      </tr>
      ))}
    
  </tbody>
</table>
</Fragment>
);
};

export default ListRegisters;