//Heroes
var heroes = ["doomfist", "genji", "mccree", "pharah", "reaper",
 "soldier76", "sombra", "tracer", "bastion", "hanzo", "widowmaker", "junkrat", "mei",
  "torbjorn", "d.va", "orisa", "reinhard", "roadhog", "winston", "wrecking ball", "zarya", "ana",
   "brigitte", "lucio", "mercy", "moira", "symmetra", "zenyatta", "ashe"];
heroes.reverse();


for (i=0; i < heroes.length; i++) {
	document.getElementById('cake').insertAdjacentHTML('afterend',
'<div  tabindex="-1" class="herobox inlineThis pos" id="'+heroes[i]+'"><img src="img/'+heroes[i]+'.png"/><span class="container"><span class="portrait-title">'+heroes[i]+'</span></span></div>');
}

heroes.reverse();

document.getElementById('add').addEventListener('click', newPlayer);
document.getElementById('scramble').addEventListener('click', scramble);


var playerCount = 0;
var player = [];

function newPlayer() {
	
	if (playerCount < 6) {
		playerCount++;
		var playerName = document.getElementById('player-name');
		document.getElementById('newPlayer').insertAdjacentHTML('beforebegin','<div class="playerHero name inlineThis"><p>'+playerName.value+'</p></div>');
		player[playerCount] = heroes[Math.floor(Math.random()* heroes.length)];
		var index = heroes.indexOf(player[playerCount]);
		heroes.splice(index, 1);
	    document.getElementById(player[playerCount]).classList.add('playerHero'+playerCount);
    } else {
    	console.log('That\'s too many!');
    }
}

function scramble() {

    for (i=1; i < playerCount+1; i++) {
        heroes.push(player[i]);
        document.getElementById(player[i]).classList.remove('playerHero'+i);
    };

	for (i=1; i < playerCount+1; i++) {
		player[i] = heroes[Math.floor(Math.random()* heroes.length)];
		var index = heroes.indexOf(player[i]);
		heroes.splice(index, 1);
	    document.getElementById(player[i]).classList.add('playerHero'+i);
    };
}

window.addEventListener('keydown', function(e) {
	if (e.keyCode === 13) {
		newPlayer(e);
	}
})

function validate(e) {
	var text = e.value;
}

//random

//