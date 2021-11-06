function aorn(){
  
  rand = Math.floor(Math.random()*2);  //乱数作成
 
  if (rand == 0) {
    var text = "あんまんを食べよう！";
    var img = '<img src="chukaman2_anko.png">';
  }else {
    var text = "肉まんを食べよう！";
    var img = '<img src="chukaman1_niku.png">';  
  }

  //ボタンの文字を書き換え
  btn.innerHTML = "もう一回決める" ;

  random_text.innerHTML = text
  random_img.innerHTML = img
}
