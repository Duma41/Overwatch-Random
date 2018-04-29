
//Heroes
var heroes = ["doomfist", "genji", "mccree", "pharah", "reaper",
 "soldier76", "sombra", "tracer", "bastion", "hanzo", "junkrat", "mei",
  "torbjorn", "d.va", "orisa", "reinhard", "roadhog", "winston", "zarya", "ana",
   "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta"];

var chosenHero = heroes[Math.floor(Math.random() * heroes.length)];

//Random hero
document.querySelector('.btns').addEventListener('click', function() {
    var chosenHero = heroes[Math.floor(Math.random() * heroes.length)];
    document.getElementById('chosen-hero').textContent = chosenHero;
    document.getElementById('chosen-here-img').src = "img/" + chosenHero + ".png";
})


//Add player
document.getElementById('add').addEventListener('click', function() {
	var playerName = document.getElementById('player-name');
	document.getElementById('player-name').createElement('<p>'+playerName+'</p>');
})



//1) Fix add player




//2) Give players colors




//3) put all heroes on the page