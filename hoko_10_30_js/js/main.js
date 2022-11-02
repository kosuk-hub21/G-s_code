// $(".aa").on("click", function () {
//     //
  
// //     alert(1);
// //   $(".aa").fadeOut(2000);
//     // 下は削除しない
//   });


//jsに記述
$(".aa").on("click", function () {
    //
    // alert(1);
    // $(".aa").fadeOut(2000); // 1000は1秒, 2000は2秒になります🤗
    // 下は削除しない
  
    // クリックされたら class="bb"を表示する
    // そのためには注意！必ず最初に「非表示」にする必要があります🤗
    // cssの場合はdisplay:none;をつける
    $(".bb").fadeIn(2000);
    document.designMode = "on";
    // つけたり、けしたりしたいならこれ使ってね！って
  // jqueryの公式サイトに書いてるおまじないが[fadeToggle]
  });