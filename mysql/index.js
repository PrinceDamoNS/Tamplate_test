var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "contents"
});

/*con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});*/
con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM contents", function (err, result, fields) {
      if (err) throw err;
      console.log(result);
    });
  });