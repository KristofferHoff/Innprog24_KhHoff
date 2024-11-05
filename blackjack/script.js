let playerHand = [];
let dealerHand = [];
const playerScoreElement = document.getElementById('player-score');
const dealerScoreElement = document.getElementById('dealer-score');
const playerHandElement = document.getElementById('player-hand');
const dealerHandElement = document.getElementById('dealer-hand');
const messageElement = document.getElementById('message');

const cards = [
    { value: 2, name: '2' }, { value: 3, name: '3' }, { value: 4, name: '4' },
    { value: 5, name: '5' }, { value: 6, name: '6' }, { value: 7, name: '7' },
    { value: 8, name: '8' }, { value: 9, name: '9' }, { value: 10, name: '10' },
    { value: 10, name: 'J' }, { value: 10, name: 'Q' }, { value: 10, name: 'K' },
    { value: 11, name: 'A' }
];

function getRandomCard() {
    return cards[Math.floor(Math.random() * cards.length)];
}

function addCardToHand(hand, element) {
    const card = getRandomCard();
    hand.push(card);
    element.innerHTML += card.name + ' ';
    return calculateScore(hand);
}

function calculateScore(hand) {
    let score = 0;
    let aceCount = 0;
    
    hand.forEach(card => {
        score += card.value;
        if (card.name === 'A') aceCount++;
    });

    while (score > 21 && aceCount > 0) {
        score -= 10;
        aceCount--;
    }

    return score;
}

document.getElementById('hit').addEventListener('click', () => {
    const score = addCardToHand(playerHand, playerHandElement);
    playerScoreElement.textContent = 'Score: ' + score;

    if (score > 21) {
        messageElement.textContent = 'You bust! Dealer wins!';
        document.getElementById('hit').disabled = true;
        document.getElementById('stand').disabled = true;
    }
});

document.getElementById('stand').addEventListener('click', () => {
    let dealerScore = 0;
    dealerHandElement.innerHTML = '';
    
    while (dealerScore < 17) {
        dealerScore = addCardToHand(dealerHand, dealerHandElement);
        dealerScoreElement.textContent = 'Score: ' + dealerScore;
    }

    const playerScore = calculateScore(playerHand);
    if (dealerScore > 21 || playerScore > dealerScore) {
        messageElement.textContent = 'You win!';
    } else if (dealerScore === playerScore) {
        messageElement.textContent = 'It\'s a tie!';
    } else {
        messageElement.textContent = 'Dealer wins!';
    }

    document.getElementById('hit').disabled = true;
    document.getElementById('stand').disabled = true;
});

// Start the game by dealing initial cards
addCardToHand(playerHand, playerHandElement);
addCardToHand(dealerHand, dealerHandElement);
