//All code here to be run on the server
//Using Express framework for node js
//npm install --save express - command to install Express

//boilerplate express starter app
const express = require('express') //requrie the express package
const app = express()

app.get('/', function (req, res) { //focus on the root URL
  res.send('Hello World!')
})

app.listen(3000, function () { //creating a server listening on port 3000
  console.log('Example app listening on port 3000!')
})
