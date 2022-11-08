const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true,
        unique: 1
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: {
        type: Number,
        default: 0
    },
    image: String,
    token: {
        type: String
    },
    tokenExp: {
        type: Number
    }
})  

//Register Route(index.js)에서 user 정보를 저장하기 전에 암호화 
userSchema.pre('save', function(next){
    //post한 데이터 값 접근
    var user = this;

    //유저가 다른 정보가 아닌 비밀번호를 변경했을 때만 다시 암호솨
    if(user.isModified('password')){
 
        //비밀번호 암호화
        bcrypt.genSalt(saltRounds, function(err, salt){
            if(err) return next(err);

            bcrypt.hash(user.password, salt, function(err, hash){
                if(err) return next(err);
                user.password = hash

                next();
            })
        })
    }
    else{
        next();
    }

})

const User = mongoose.model('User', userSchema) //userSchema를 User라는 이름의 model로 감싸기
module.exports= { User } //User 모델을 외부에서도 접근 가능 설정
