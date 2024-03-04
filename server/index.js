const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json());//gives access to request body from client side

//ROUTES//

//create a registerzone

app.post("/registers", async (req, res) => {
    try {
      const { StdID, FullName, Sport_acquired, Date, Time, Office_Tower, Floor } = req.body;
      const newRegister = await pool.query(
        "INSERT INTO registerzone (StdID, FullName, Sport_acquired, Date, Time, Office_Tower, Floor) VALUES($1, $2, $3, $4, $5, $6, $7) RETURNING *",
        [StdID, FullName, Sport_acquired, Date, Time, Office_Tower, Floor]
      );
      console.log(newRegister)
      return res.json(newRegister.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get all registrations
  
  app.get("/registers", async (req, res) => {
    try {
      const allRegisters = await pool.query("SELECT * FROM registerzone");
      return res.json(allRegisters.rows);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //get a registration
  
  app.get("/registers/:stdid", async (req, res) => {
    try {
      const { stdid } = req.params;
      const registerzone = await pool.query("SELECT * FROM registerzone WHERE StdID = $1", [
        stdid
      ]);
  
      res.json(registerzone.rows[0]);
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //update a registeration
  
  app.put("/registers/:stdid", async (req, res) => {
    try {
      const { stdid } = req.params;
      const { FullName } = req.body;
      const updateRegister = await pool.query(
        "UPDATE registerzone SET FullName=$1 WHERE StdID = $2",
        [FullName, stdid]
      );
  
      res.json("Registeration was updated!");
    } catch (err) {
      console.error(err.message);
    }
  });
  
  //delete a registeration
  
  app.delete("/registers/:stdid", async (req, res) => {
    try {
      const { stdid } = req.params;
      const deleteRegister = await pool.query("DELETE FROM registerzone WHERE StdID = $1", [
        stdid
      ]);
      res.json("Registeration was deleted!");
    } catch (err) {
      console.log(err.message);
    }
  });

app.listen(5000, () => {
    console.log("server has started on port 5000");
  });