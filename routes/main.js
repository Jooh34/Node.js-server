var express = require("express"),
    router = express.Router();

var User = require('../models/user')

router.get("/",function(req,res){//맨처음 접속하면 login.html 파일이 실행되도록 한다.
    res.sendFile("login.html",{
        root : "./"//이것을 한 이유는 login.html 이 현재 폴더가 아닌 상위폴더에 존재하므로
        //"../"를 하면은 상대적 상위폴더 개념인데 이것도 안되고
        //__dirname 은 현재 폴더인데 당연히 안되서
        //"./" 프로젝트의 기본 폴더를 지칭하는 이것을 사용
    })
});

router.post("/",function(req,res){
    //html form으로 부터 데이터를 받아요!!
    var id = req.body.uID;//login.html에서 지정한 id를 req.body라는 새로운 기능을 이용하여 추출
    var pw = req.body.uPW;//login.html에서 지정한 id를 req.body라는 새로운 기능을 이용하여 추출

    User.find({ID : id, PWD : pw}, function(err, user){
      if(err) return console.error(err);
      else {
        if (user.length === 0) res.render("loginFail");
        else res.render("loginSuccess");
      }
    })
});

module.exports = router;

// front-end 짜기 전 임시방편
// 출처 : http://posnopi13.tistory.com/13?category=146024
