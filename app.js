const express = require('express')
const app = express()
const port = 3000
const mysql = require('mysql');


app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/articles', function (req, res) {
  getArticles((articles) => res.status(200).send(articles));
})

app.listen(port, () => console.log(`Go to browser and check port ${port}!`))


function getArticles(callback) {
  let con = mysql.createConnection(require('./db.config'));
  con.connect(function (err) {
    if (err) {
      console.log(err);
      return;
    }
    con.query('select * from articles', (err, result, fields) => {
      if (err) {
        console.log(err);
        return;
      }
      callback(result);
      con.end();
    })
  });
}