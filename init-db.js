let articles = require('./articles-container');
const express = require('express')    
const app = express()             //create server
const port = 3001                //start server
const mysql = require('mysql');
let con = mysql.createConnection(require('./db.config'));

con.connect(function(err) {
  if (err) {console.log(err); return;}
  console.log("Connected!");


  var sql = "INSERT INTO articles (id, title, text, published_date) VALUES ?";
  
  con.query(sql, [articles], function(err, result) {

    articles.map(a => Object.values(a))
    
    if (err) {console.log(err); return;}
    console.log(result);

  }); 
  }); 
