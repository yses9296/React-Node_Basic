const express = require('express')
const app = express()
const port = 4000

const config = require('./config/key');

//mongoDB connection - mongoose
const mongoose = require('mongoose');
mongoose.connect(config.mongoURI)
.then( ()=> console.log('MongoDB Connected..')) //MongoDB Connection Succeed
.catch( err => console.log(err))                //MongoDB Connection Failed


app.get('/', (req, res) => {
  res.send('Hello World! This is Node with React')
})


const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({extended: true})); //application/x-www-form-urlencoded 분석
app.use(bodyParser.json()); //application/json 분석

//Register Route
const { User } = require('./models/User');

app.post('/register', (req, res) => {//회원가입에 필요한 정보들을 client에서 가져오면 그것들을 데이터 베이스에 넣어준다.
  const user = new User(req.body); //인스턴스 생성
  user.save((err, userInfo) => {
    if(err) return res.json( {success: false, err})
    return res.status(200).json({
      success: true
    })
  });
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})