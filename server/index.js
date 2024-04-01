// Dependencies
const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const colors = require("colors");

app.use(express.json());
app.use(cors());
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
  const sentEmail = req.body.Email;
  const sentUserName = req.body.UserName;
  const sentPassword = req.body.Password;

  //SQL Statement to insert user to database table
  const SQL = "INSERT INTO users (email, username, password) VALUES (?,?,?)";
  //Send values through variable
  const Values = [sentEmail, sentUserName, sentPassword];

  //Query to execute sql statement
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send(err);
    } else {
      console.log("User inserted successfully");
      res.send({ message: "User added" });
      //Test it
      // User has not been submitted we need to use express
      //Successful
    }
  });
});

// Now we need to login with these credentials
app.post("/login", (req, res) => {
  const sentloginUserName = req.body.LoginUserName;
  const sentLoginPassword = req.body.LoginPassword;

  //SQL Statement to insert user to database table
  const SQL = "SELECT * FROM users WHERE username = ? && password = ?";
  //Send values through variable
  const Values = [sentloginUserName, sentLoginPassword];

  //Query to execute sql statement
  db.query(SQL, Values, (err, results) => {
    if (err) {
      res.send({ error: err });
    }
    if (results.length > 0) {
      res.send(results);
    } else {
      res.send({ message: `Credentials Don't match` });
      // this should be good, lets try it
    }
  });
});
