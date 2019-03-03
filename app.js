const express = require('express')    
const app = express()             //create server
const port = 3000                 //start server
const mysql = require('mysql');

let con = mysql.createConnection(require('./db.config'));

con.connect(function(err) {
  if (err) {console.log(err); return;}
  console.log("Connected!");
  con.query('select * from articles',(err, result, fields) => {
    if (err) {console.log(err); return;}
    console.log(result);
  })
});

let articles = require('./articles-container');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/articles', function (req, res) {
  res.status(200).send(articles)
})

app.listen(port, () => console.log(`Go to browser and check port ${port}!`))

