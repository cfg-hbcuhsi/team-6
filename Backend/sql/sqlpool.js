var mysql = require('mysql');

var con = mysql.createConnection({
  host: "#",
  user: "team6",
  password: "team6hackathon",
  database: "innodb"
});


module.exports = con ;