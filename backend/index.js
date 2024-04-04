const express = require("express");
var mysql = require("mysql2");
var cors = require('cors')
const app = express();
app.use(cors())

app.use(express.json());
var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root",
  database: "new_schema",
});
connection.connect(function (err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});
app.get("/", (req, res) => {
  res.send({ message: "Hello yuva" });
});
app.post("/post", (req, res) => {
  const requestData = req.body;
  console.log("Recieved data:", requestData.firstname);
  connection.query(
    `INSERT INTO clients (firstname,lastname,email,password) VALUES ("${requestData.firstname}", "${requestData.lastname}","${requestData.email}","${requestData.password}")`,
    function (error, results, fields) {
      if (error) throw error;
       res.status(200).json(results[0]);
    }
  );
//   res.status(404).send('Sorry, cant find that');
  connection.end();
});
app.listen(5000);
//01iIkCbiNKqyRruPmJ9KAw
// 