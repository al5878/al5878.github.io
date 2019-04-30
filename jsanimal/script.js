var crown = document.getElementById("flowercrown");
var crownHeight= crown.height;//get the dimensions of the flower crown image
var crownWidth= crown.width;


console.log(crownWidth);
console.log(crownHeight);
// place the crown when the mouse is clicked
function placeCrown(event){

  //get the x and y coords of the mouse
  var mouseX = event.clientX;
  var mouseY = event.clientY;

//set the flower crown position to that of the mouse
//factoring in the size of the image to center it at the mouse
  var left= mouseX-(crownWidth/2);
  crown.style.left= left +"px";

  var top= mouseY-(crownHeight/2);
  crown.style.top= top +"px";
  // console.log(top);
  // console.log(left);

}
