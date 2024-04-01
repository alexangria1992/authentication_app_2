// Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const colors = require("colors");
// run server
app.listen(3002, () => {
  console.log(colors.cyan("Server is running on port 3002"));
});

//database
const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "", // If you have a set xampp password please enter it here
  database: "plantdb",
});

//server route that registers user
app.post("/register", (req, res) => {
  // we need to get variables sent from the form
});
