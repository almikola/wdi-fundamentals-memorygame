console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];

/*if (cardTwo === cardFour) {
	alert('You found a match!');
}
else  {alert('Sorry, try again.');
}

if (cardOne === cardTwo) {
	alert('You found a match!');
}
else {alert('Sorry,try again.');}

if (cardThree === cardFour) {
	alert('You found a match!');
}
else {alert('Sorry, try again.');
}*/

var gameBoard = document.getElementById('game-board');
var createCards = function() {
for (var i = 0; i < cards.length; i++) {
	var newCards = document.createElement('div');
	newCards.className = 'card';
	gameBoard.appendChild(newCards);
};
};

createCards ();