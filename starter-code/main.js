console.log("JS file is connected to HTML! Woo!")
var cardOne = 'queen';
var cardTwo = 'queen';
var cardThree = 'king';
var cardFour = 'king';

var cards = ['queen', 'queen', 'king', 'king'];

var cardsInPlay = [];

function createCards () {
var gameBoard = document.getElementById('game-board');
for (i=0; i<cards.length; i++) {
	var cardElement = document.createElement('div')
	cardElement.className = 'card';
	document.getElementById('game-board').appendChild(cardElement);
	cardElement.setAttribute('data-card', cards[i]);
	cardElement.addEventListener('click', isTwoCards);
}	
}
createCards();


function isMatch() {
	if (cardsInPlay[0] === cardsInPlay[1]) {
	alert('You found a match!');
} else {
	alert('Sorry, try again.');
}
}

function isTwoCards() {
	if (this.getAttribute('data-card') === 'king') {
	this.innerHTML = '<img src="root/king.png" alt="King of Spades" />';
}
	else {
		this.innerHTML = '<img src="root/queen.png" alt="Queen of Spades" />'
	}
	cardsInPlay.push(this.getAttribute('data-card'));
	if (cardsInPlay.length === 2) {
		isMatch(cardsInPlay);
		cardsInPlay = [];
		clearBoard();
	}
}

function clearBoard() {
	var cardElement = document.getElementsByClassName('card');
	for (i=0; i<cards.length; i++) {
		cardElement[i].innerHTML = '';
}
}
