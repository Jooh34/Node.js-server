var Crawler = require("crawler");

function menuCrawl() {

}
var c = new Crawler({
    maxConnections : 10,
    // This will be called for each crawled page
    callback : function (error, res, done) {
        if(error){
            console.log(error);
        }else{
            var $ = res.$;

            var menus = [];

            var tr = $('tbody').first(); // 식단 부분
            $(tr).find('tr').each(function (mealtime, elem1) { // index means 아침 / 점심 / 저녁

              var td = $(this).find('td').next() // 제목 빼기
              $(td).find('ul').each(function (day, elem2) { // index means 요일

                var foods = [];
                $(this).find('li').each(function (index, elem3) {
                  foods.push($(this).text())
                })

                menus.push({
                  day : day,
                  time : mealtime,
                  name : foods,
                })
              })
            })

            console.log(menus);

            var th = $('thead').first(); // 날짜 테이블

            var dates = [];
            $(th).find('th').each(function (day, elem) {

              if(day > 0) {
                date = $(this).text();
                dates.push({
                  day : day,
                  date : date
                })
              }
            })

            console.log(dates)
        }
        done();
    }
});

// Queue just one URL, with default callback
c.queue('http://injae.gwd.go.kr/site/college/page/sub03_06_04.asp');

module.exports = {
  crawl: function (query, callback) {
  }
}
