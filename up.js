'use strict';

let hisBirthTime = new Date( 1928, 0, 1, 0, 0 );

function updateP() {

  //let hisBirthTime = new Date( 1928, 0, 1, 0, 0 );
  
  let now = new Date();
  
  //生まれてからの年数
  let years = (now.getTime()-hisBirthTime.getTime())/(1000*60*60*24*365.25);
  let bun = `お父さん生誕${Math.floor(years)}周年おめでとうございます！`;
  document.getElementById('birth-years').innerText= bun;
}

setInterval(updateP,1000);

(function() {
let bg = ["img/asayake.jpg",
          "img/fuji.jpg",
          "img/hamada.jpg",
          "img/iriomote2.jpg",
          "img/iriomote3.jpg",
          "img/ishiwari.jpg",
          "img/kaikyou.jpg",
          "img/kinutaUme.jpg",
          "img/misumi.jpg",
           ];
          
let r = Math.floor(Math.random() * bg.length);
document.getElementById("backimg").style.backgroundImage = "url(" + bg[r] + ")";
})()

