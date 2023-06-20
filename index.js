var x=Math.floor( Math.random() * 6)+1;
var y=Math.floor( Math.random() * 6)+1;
var imgsrc="images/"+"dice"+x+".png";
var imgsrc1="images/"+"dice"+y+".png";
document.querySelectorAll("img")[0].setAttribute("src",imgsrc);
document.querySelectorAll("img")[1].setAttribute("src",imgsrc1);
if(x>y){
    document.querySelector("h1").innerHTML="1st player wins";
}
else if(x<y){
    document.querySelector("h1").innerHTML="2nd player wins ";
}
else{
    document.querySelector("h1").innerHTML="DRAW";
}