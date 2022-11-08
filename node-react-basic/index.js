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

//Login Route
app.post('./login', (req, res) => {
  //step 1: 요청된 이메일을 데이터베이스에서 찾는다.
  //step 2: 요청한 email가 존재한다면 비밀번호가 같은지 확인
  //step 3: 이메일, 비밀번호 모두 일치 시 토큰 생성

  User.findOne({email: req.body.email}, (err, userInfo) => {
    if(!userInfo) return res.json({loginSuccess: false, message: "존재하지 않는 이메일입니다."})

    userInfo.comparePassword(req.body.password, (err, isMatch) => {
      if(!isMatch)
        return res.json({loginSuccess: false, message: "비밀번호가 일치하지 않습니다." })
      
      userInfo.generateToken((err, user) => {

      })

      
    })
  })
});



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})