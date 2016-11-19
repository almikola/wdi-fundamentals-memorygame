console.log("JS file is connected to HTML! Woo!")
var cards = ['queen', 'queen', 'king', 'king'];
var cardsInPlay = [];

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
function createBoard() {
for (var i = 0; i < cards.length; i++) {
	var newCards = document.createElement('div');
	newCards.className = 'card';
	newCards.setAttribute('data-card', cards[i]);
	newCards.addEventListener('click', isTwoCards);
	
	gameBoard.appendChild(newCards);
	gameBoard.appendChild(newCards);
}
}

function isTwoCards() {
	cardsInPlay.push(this.getAttribute('data-card'));
	console.log(this.getAttribute('data-card'));
	if (this.getAttribute('data-card') === 'king') {
		this.innerHTML = "<img src='king.png'>";
	} else {
		this.innerHTML = "<img src='queen.png'>";
	}
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
	}
}


function isMatch(cards) {
	if (cards[0] === cards[1]) {
		alert ("You've found a match!");
	} else {
		alert ("Sorry, try again.");
	}
}

createBoard();

