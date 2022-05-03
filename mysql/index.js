/*var mysql = require('mysql');

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
/*
  con.connect(function(err) {
      if (err) throw err;
      con.query("SELECT * FROM contents", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
      });
    });*/

  //connect
  const express = require('express');
  const app = express();
  const mysql = require('mysql');
  const cors = require('cors');

  app.use(cors());
  app.use(express.json());

  
  const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "contents"
  })
//connect

//Show
  app.get('/contents', (req, res) => {
    db.query("SELECT * FROM contents", (err,result) => {
      if(err){
        console.log(err);
      }else{
        res.send(result);
      }

    });
  });
//Show
//add
  app.post('/add_contents', (req, res) => {
      const title = req.body.title;
      const short_desc = req.body.short_desc;
      const long_desc = req.body.long_desc;

      db.query("INSERT INTO `contents` (`title`, `short_desc`, `long_desc`) VALUES (?, ?, ?)", 
      [title, short_desc, long_desc],
      (err,result) => {
        if (err) {
          console.log(err);
        }
        else
        {
          res.send("Values Inserted");
        }

      }
      );
    });
//add
//update
app.put('/update_contents', (req, res) => {
  const id = req.body.id;
  const title = req.body.title;
  db.query("UPDATE `contents` SET title = ? WHERE id = ?",
  [title, id],
    (err,result) => {
      if (err) {
        console.log(err);
      }
      else
      {
        res.send(result);
      }
    });
  })
//update
//delete
app.delete('/delete_contents/:id', (req, res) => {
  const id = req.params.id;
  db.query("DELETE FROM `contents` WHERE id = ?", id,
    (err,result) => {
      if (err) {
        console.log(err);
      }
      else
      {
        res.send(result);
      }
    });
  })
//delete
//select port
  app.listen('3001', () => {
    console.log('Server is running on port 3001');
  })
//select port