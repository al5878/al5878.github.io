function squareNumber(){
  var num=document.getElementById("square-input").value;//takes in input from the text box
  var squared= num**2;

  var answer= squared+ ". The result of squaring "+num+" is "+squared;//puts the answer into a long string
  console.log(answer);//check
  return(
    document.getElementById("solution").innerHTML= answer//puts the answer into the solution div
  );
}
var button1=document.getElementById("square-button");
button1.addEventListener("click",function(){squareNumber();});//when the button clicks. the squarenumber function is run


function halfNumber(){
  var num=document.getElementById("half-input").value;
  var halved= num/2;

  var answer= halved+ ". The result of halving "+num+" is "+halved;
  console.log(answer);
  return(
    document.getElementById("solution").innerHTML= answer
  );
}
var button2=document.getElementById("half-button");
button2.addEventListener("click",function(){halfNumber();});




function percentOf(){
  var num1=document.getElementById("percent1-input").value;
  var num2=document.getElementById("percent2-input").value;
  var percent=(num1/num2)*100;

  var answer=percent+"%. "+ num1+" is "+percent+"% of "+num2;
  console.log(answer);
  return(
    document.getElementById("solution").innerHTML= answer
  );
}
var button3=document.getElementById("percent-button");
button3.addEventListener("click",function(){percentOf();});





function areaOfCircle(){
  var radius=document.getElementById("area-input").value;
  var area= Math.PI*radius*radius;

  var answer= area+ ". The area of a crcle with radius "+radius+" is "+area;
  console.log(answer);
  return(
    document.getElementById("solution").innerHTML= answer
  );
}
var button4=document.getElementById("area-button");
button4.addEventListener("click",function(){areaOfCircle();});
