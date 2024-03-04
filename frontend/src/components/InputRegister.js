import React, { Fragment, useState } from "react";

const InputRegister = () => {
  const [stdid, setstdid] = useState("");
  const [fullname, setfullname] = useState("");
  const [sport_acquired, setSportAcquired] = useState("");
  const [date, setdate] = useState("");
  const [time, settime] = useState("");
  const [office_tower, setOfficeTower] = useState("");
  const [floor, setfloor] = useState("");

  const onSubmitForm = async e => {
   
  
    e.preventDefault();
    try {
      const body = { stdid, fullname, sport_acquired, date, time, office_tower, floor };
      console.log(body)
      const response = await fetch("http://localhost:5000/registers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          stdid, fullname, sport_acquired, date, time, office_tower, floor
        })
      })
      .then(res =>{
        console.log("res from backend"+res)
      });
      console.log("res"+response)
      console.log("body"+body)
      window.location = "/";

      // const myHeaders = new Headers();
      // myHeaders.append("Content-Type", "application/json");

      // const raw = JSON.stringify(body);

      // const requestOptions = {
      //   method: "POST",
      //   headers: myHeaders,
      //   body: raw,
      //   redirect: "follow"
      // };

      // fetch("http://localhost:5000/registers", requestOptions)
      //   .then((response) => response.text())
      //   .then((result) => console.log(result))
      //   .catch((error) => console.error(error));
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <h1 className="text-center mt-5">Game Zone Registration</h1>
      <form className="d-flex mt-5" onSubmit={onSubmitForm}>
      <input type="text" value={stdid} onChange={(e) => setstdid(e.target.value)} placeholder="SID" />
      <input type="text" value={fullname} onChange={(e) => setfullname(e.target.value)} placeholder="Full Name" />
      <input type="text" value={sport_acquired} onChange={(e) => setSportAcquired(e.target.value)} placeholder="Sport Acquired" />
      <input type="date" value={date} onChange={(e) => setdate(e.target.value)} placeholder="date" />
      <input type="time" value={time} onChange={(e) => settime(e.target.value)} placeholder="time" />
      <input type="text" value={office_tower} onChange={(e) => setOfficeTower(e.target.value)} placeholder="Office Tower" />
      <input type="text" value={floor} onChange={(e) => setfloor(e.target.value)} placeholder="floor" />
        <button className="btn btn-success">Add</button>
      </form>
    </Fragment>
    
  );
};

export default InputRegister;