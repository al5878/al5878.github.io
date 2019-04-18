var paragraphs = document.getElementsByTagName('p')

function getNumOfParagraphs(){
  console.log(paragraphs.length);
  alert("There are " + paragraphs.length + " paragraph tags on this page.")
}

function groupOneParagraphs(){
  var groupOnePs = document.getElementById("group1").getElementsByTagName('p')
  console.log(groupOnePs.length);
  alert("There are " + groupOnePs.length + " paragraphs inside div 1.")
}


function groupTwoParagraphs(){
  var groupTwoPs = document.getElementById("group2").getElementsByTagName('p')
  console.log(groupTwoPs.length);
  alert("There are " + groupTwoPs.length + " paragraphs inside div 2.")
}
