
document.querySelector(".btn").addEventListener("click",function(){
  document.querySelector(".btn").textContent="Play Again";
  var n1=Math.random();
  n1=Math.floor(n1*6+1);
  var n2=Math.random();
  n2=Math.floor(n2*6+1);
  if (n1>n2){
    document.querySelector("h1").textContent="🚩Player 1 wins";
  }else if (n1<n2){
    document.querySelector("h1").textContent="Player 2 wins 🚩";
  }else{
    document.querySelector("h1").textContent="Oh, It's a Tie!!!";
  }
  document.querySelector(".img1").setAttribute("src","images/dice"+n1+".png");
  document.querySelector(".img2").setAttribute("src","images/dice"+n2+".png");
})
