// //一番最初に必ずやること
// //alert();読み方　あらーと
// alert(1111);
// // // ↑でHTMLと繋がっているか確認！＊
// // // command+/でコメントアウトできる！！
// // // 演習1
// console.log("はじめてのじゃばすくりぷと");
// // 画面にしか表示されない。バグを探すためにどこに何があるか表示しておく。＊

// // 演習2
// console.log(23+5)
// console.log(2000-1800)
// console.log("18+5")

// // 変数のお話
// // var XXXは箱の名前
// var name="こうすけ"
// console.log(name);


// // if文　条件分岐
// // 条件分岐とは？
// // 

// var hako =1;
// if(hako === 1){
//     console.log("1が入っています");
//     // ↑を表示させるよ
// }else if(hako === 2){
//     console.log("2が入っています");
// }else if(hako === 3){
//     console.log("2が入っています");
// }


// var point =90;
// if(point >=90){
//     console.log("素晴らしい！おめでとう");
// }else if(point <=80){
//     console.log("もっと頑張りましょう！");
// }


// // おまじない
// // Math.floor
// var random = Math.floor(Math.random() * 5);
// console.log(random, "ランダムな数字");

// if (random === 0) {
//     console.log("大吉");
//   } else if (random === 1) {
//     console.log("中吉");
//   } else if (random === 2) {
//     console.log("小吉");
//   } else if (random === 3) {
//     console.log("吉");
//   } else if (random === 4) {
//     console.log("末");
//   }


//   jqueryの書き方
// ＄ドルマークとは？=jqueryを意味している
// class ="a"に対して何かする
 $(".a").on('click',function(){
    // 
alert("h1が押されました！");
    //ついかしたもの
 $(".a").css("color","red");
//   




var random = Math.floor(Math.random() * 5);
console.log(random, "ランダムな数字");
// どこの何を表示している↑

if (random === 0) {
    console.log("大吉");
    $(".a").text("大吉");
  } else if (random === 1) {
    console.log("中吉");
    $(".a").text("中吉");
  } else if (random === 2) {
    console.log("小吉");
    $(".a").text("小吉");
  } else if (random === 3) {
    console.log("吉");
    $(".a").text("吉");
  } else if (random === 4) {
    console.log("末");
    $(".a").text("末");
  }
// $はjクエリ

 });



