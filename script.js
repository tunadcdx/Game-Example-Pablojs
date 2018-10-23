$(function() {
  // sayfa tamanen yüklendikten sonra  çalışır
  var svg = Pablo('#ground').svg({
    //yükseklik ve genişlik alanı
    width: 1100,
    height: 750
  });
  var top;
  var topX = 550;
  var topY = 500;
  var topR = 10;
  var alanX1 = 0;
  var alanX2 = 1100;
  var alanY1 = 0;
  var alanY2 = 750;

  top = svg.circle({
    cx: topX,
    cy: topY,
    r: topR,
    fill: '#060'
  });

  var yon = [+1, -1];
  var yonX = yon[Math.floor(Math.random() * 2)]; // 0 yada 1 degerini alır
  var yonY = yon[Math.floor(Math.random() * 2)];
  var yay;
  var yayX = 500;
  var yayY = 700;
  yay = svg.rect({
    x: yayX,
    y: yayY,
    width: 240,
    height: 40,
    fill: '#262626'
  });

  setInterval(function() {
    //top nesnesine hareket kabiliyeti kazandır
    top.attr({ cx: topX, cy: topY });
    // top.remove(); // top nesnesini siler

    // top = svg.circle({ //top nesnesi silindikten sonra tekrar oluşturur
    //   cx: topX,
    //   cy: topY,
    //   r: topR,
    //   fill: '#060'
    // });

    topX = topX + yonX;
    topY = topY + yonY;

    /* if (topX==300) {
        topX=  clearInterval(topX==300);
        topY=  clearInterval(topY==300);
    }*/

    // x = Math.random();// 0ve 1 arasında değer üretir(x'in gelen degeri 0 oldugu için )
    // x=Math.floor(Math.random()*10); //0 ile 9 arasında değer üretir
    // x=Math.floor(Math.random()*10)+1; //çıkan sonuca +1 deger katar
    //console.log(x);
    if (topX == alanX1 + 10 || topX == alanX2 - 10) {
      yonX = yonX * -1;
    }

    if (topY == alanY1 + 10 || topY == alanY2 - 10) {
      yonY = yonY * -1;
    }
  }, 2);
//   $(document).mousemove(function(event) {
//     //mouse kordinatlarını yakalamak

//     $('#ground').text(event.clientX + ' , ' + event.clientY);
//   });
$(document).keydown(function(event) {
    var code = event.which;
    console.log(code);
  })



})
  