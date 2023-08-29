var randomNumber1=Math.floor(Math.random()*6)+1;
var randomNumber2=Math.floor(Math.random()*6)+1;
var img1="dice"+randomNumber1+".png";
var img2="dice"+randomNumber2+".png";
var img1_loc=document.querySelector(".img1");
img1_loc.setAttribute("src","images/"+img1);
document.querySelector(".img2").src="images/"+img2;
if(randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML="🎉 Player 1 Wins"
}
else if(randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML="Player 2 Wins 🎉"
}
else {
    document.querySelector("h1").innerHTML="Draw"
}
