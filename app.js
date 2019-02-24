const express = require('express')    
const app = express()             //create server
const port = 3000                 //start server
let articles = require('./articles-container');

app.get('/articles', function (req, res) {
  res.status(200).send(articles)
})

app.listen(port, () => console.log(`Go to browser and check port ${port}!`))



