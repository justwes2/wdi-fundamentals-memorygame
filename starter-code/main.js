console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';
/*if (cardOne === cardFour) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}*/

function createCards () {
var gameBoard = document.getElementById('game-board');
for (i=0; i<4; i++) {
	var flipCard = document.createElement('div')
	flipCard.className = 'card';
	document.getElementById('game-board').appendChild(flipCard);
}	
}
createCards();