const express = require('express')
const app = express()
const port = 4000

//mongoDB connection - mongoose
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://yses9296:jj0709ang25@cluster0.vei6kr9.mongodb.net/?retryWrites=true&w=majority')
.then( ()=> console.log('MongoDB Connected..')) //MongoDB Connection Succeed
.catch( err => console.log(err)) //MongoDB Connection Failed



app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})