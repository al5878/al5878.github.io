var videoPageArr=["",
"Anybody Have A Map?",
"Waving Through A Window",
"Waving Through A Window",
"Waving Through A Window",
"For Forever",
"For Forever",
"For Forever",
"Sincerely Me",
"Sincerely Me",
"Requiem",
"Requiem",
"If I Could Tell Her",
"Disappear",
"You Will Be Found",
"You Will Be Found"];

var artPageArr=["",
"Things have been crazy and it sucks that we don't talk that much",
"All I see is sky for forever",
"It looked pretty cool when you put indigo streaks in your hair",
"This picture-perfect afternoon we shared",
"#YOUWILLBEFOUND",
"Will I ever make a sound?",
"Two friends on a perfect day",
"Nothing can make sense of all these things I've done",
"Dear Evan Hansen,Today is going to be a good day. And here's why: because today, today at least you're you and..that's enough.",
"Pretend I'm something other than this mess that I am ",
"Now we can both pretend that we have friends",
"Umm.. Uh...",
"You Will Be Found",
"True Friends",
"Can anybody see, is anybody waving?"];

function showHeader(x,y){
  document.getElementById("header-text").innerHTML=""+videoPageArr[y]+"";
  // console.log(videoPageArr[y]);
}

function showArtHeader(x,y){
  document.getElementById("header-text").innerHTML=""+artPageArr[y]+"";
  console.log("list"+artPageArr[y]);
}
