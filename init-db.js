const mysql = require('mysql');
let con = mysql.createConnection(require('./db.config'));

let articles = require('./articles-container');

con.connect(function (err) {
    if (err) {
        console.log(err);
        return;
    }
    console.log("Connected!");
    con.query('INSERT INTO articles (id, published_date, title, text) VALUES ?', [articles.map(a => Object.values(a))], function (err, result) {

        if (err) {
            console.log(err);
            return;
        }
        console.log(result);
    });
});