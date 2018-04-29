
//Heroes
var heroes = ["doomfist", "genji", "mccree", "pharah", "reaper",
 "soldier76", "sombra", "tracer", "bastion", "hanzo", "junkrat", "mei",
  "torbjorn", "d.va", "orisa", "reinhard", "roadhog", "winston", "zarya", "ana",
   "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta"];


for (i=0; i < heroes.length; i++) {
	document.getElementById('cake').insertAdjacentHTML('afterend','<div class="heroes" id="'+heroes[i]+'"><img src="img/'+heroes[i]+'.png"/><p>'+heroes[i]+'.png</p></div>');
}

var playerCount = 0;
var player = [];

document.getElementById('add').addEventListener('click', function() {
	playerCount++;
	var playerName = document.getElementById('player-name');
	document.getElementById('player-name').insertAdjacentHTML('beforebegin','<div class="playerHero"><p>'+playerName.value+'</p></div>');
	player[playerCount] = heroes[Math.floor(Math.random()* heroes.length)];
	

})

//random

//