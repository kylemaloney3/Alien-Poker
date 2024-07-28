// script for alien poker //

const cards = [
    {
        name: "1 of Gloobs",
        value: 1,
        suit: "Gloobs",
        imageUrl: "./resources/images/1-of-gloobs.jpg",
    },
    {
        name: "2 of Gloobs",
        value: 2,
        suit: "Gloobs",
        imageUrl: "./resources/images/2-of-gloobs.jpg",
    },
    {
        name: "3 of Gloobs",
        value: 3,
        suit: "Gloobs",
        imageUrl: "./resources/images/3-of-gloobs.jpg",
    },
    {
        name: "4 of Gloobs",
        value: 4,
        suit: "Gloobs",
        imageUrl: "./resources/images/4-of-gloobs.jpg",
    },
    {
        name: "5 of Gloobs",
        value: 5,
        suit: "Gloobs",
        imageUrl: "./resources/images/5-of-gloobs.jpg",
    },
    {
        name: "6 of Gloobs",
        value: 6,
        suit: "Gloobs",
        imageUrl: "./resources/images/6-of-gloobs.jpg",
    },
    {
        name: "Jork of Gloobs",
        value: 7,
        suit: "Gloobs",
        imageUrl: "./resources/images/jork-of-gloobs.jpg",
    },
    {
        name: "Queeg of Gloobs",
        value: 8,
        suit: "Gloobs",
        imageUrl: "./resources/images/queeg-of-gloobs.jpg",
    },
    {
        name: "Kling of Gloobs",
        value: 9,
        suit: "Gloobs",
        imageUrl: "./resources/images/kling-of-gloobs.jpg",
    },
    {
        name: "Quazar of Gloobs",
        value: 10,
        suit: "Gloobs",
        imageUrl: "./resources/images/quazar-of-gloobs.jpg",
    },
    {
        name: "1 of Glarts",
        value: 1,
        suit: "Glarts",
        imageUrl: "./resources/images/1-of-glarts.jpg",
    },
    {
        name: "2 of Glarts",
        value: 2,
        suit: "Glarts",
        imageUrl: "./resources/images/2-of-glarts.jpg",
    },
    {
        name: "3 of Glarts",
        value: 3,
        suit: "Glarts",
        imageUrl: "./resources/images/3-of-glarts.jpg",
    },
    {
        name: "4 of Glarts",
        value: 4,
        suit: "Glarts",
        imageUrl: "./resources/images/4-of-glarts.jpg",
    },
    {
        name: "5 of Glarts",
        value: 5,
        suit: "Glarts",
        imageUrl: "./resources/images/5-of-glarts.jpg",
    },
    {
        name: "6 of Glarts",
        value: 6,
        suit: "Glarts",
        imageUrl: "./resources/images/6-of-glarts.jpg",
    },
    {
        name: "Jork of Glarts",
        value: 7,
        suit: "Glarts",
        imageUrl: "./resources/images/jork-of-glarts.jpg",
    },
    {
        name: "Queeg of Glarts",
        value: 8,
        suit: "Glarts",
        imageUrl: "./resources/images/queeg-of-glarts.jpg",
    },
    {
        name: "Kling of Glarts",
        value: 9,
        suit: "Glarts",
        imageUrl: "./resources/images/kling-of-glarts.jpg",
    },
    {
        name: "Quazar of Glarts",
        value: 10,
        suit: "Glarts",
        imageUrl: "./resources/images/quazar-of-glarts.jpg",
    },
    {
        name: "1 of Jarbles",
        value: 1,
        suit: "Jarbles",
        imageUrl: "./resources/images/1-of-jarbles.jpg",
    },
    {
        name: "2 of Jarbles",
        value: 2,
        suit: "Jarbles",
        imageUrl: "./resources/images/2-of-jarbles.jpg",
    },
    {
        name: "3 of Jarbles",
        value: 3,
        suit: "Jarbles",
        imageUrl: "./resources/images/3-of-jarbles.jpg",
    },
    {
        name: "4 of Jarbles",
        value: 4,
        suit: "Jarbles",
        imageUrl: "./resources/images/4-of-jarbles.jpg",
    },
    {
        name: "5 of Jarbles",
        value: 5,
        suit: "Jarbles",
        imageUrl: "./resources/images/5-of-jarbles.jpg",
    },
    {
        name: "6 of Jarbles",
        value: 6,
        suit: "Jarbles",
        imageUrl: "./resources/images/6-of-jarbles.jpg",
    },
    {
        name: "Jork of Jarbles",
        value: 7,
        suit: "Jarbles",
        imageUrl: "./resources/images/jork-of-jarbles.jpg",
    },
    {
        name: "Queeg of Jarbles",
        value: 8,
        suit: "Jarbles",
        imageUrl: "./resources/images/queeg-of-jarbles.jpg",
    },
    {
        name: "Kling of Jarbles",
        value: 9,
        suit: "Jarbles",
        imageUrl: "./resources/images/kling-of-jarbles.jpg",
    },
    {
        name: "Quazar of Jarbles",
        value: 10,
        suit: "Jarbles",
        imageUrl: "./resources/images/quazar-of-jarbles.jpg",
    },
    {
        name: "1 of Bloobles",
        value: 1,
        suit: "Bloobles",
        imageUrl: "./resources/images/1-of-bloobles.jpg",
    },
    {
        name: "2 of Bloobles",
        value: 2,
        suit: "Bloobles",
        imageUrl: "./resources/images/2-of-bloobles.jpg",
    },
    {
        name: "3 of Bloobles",
        value: 3,
        suit: "Bloobles",
        imageUrl: "./resources/images/3-of-bloobles.jpg",
    },
    {
        name: "4 of Bloobles",
        value: 4,
        suit: "Bloobles",
        imageUrl: "./resources/images/4-of-bloobles.jpg",
    },
    {
        name: "5 of Bloobles",
        value: 5,
        suit: "Bloobles",
        imageUrl: "./resources/images/5-of-bloobles.jpg",
    },
    {
        name: "6 of Bloobles",
        value: 6,
        suit: "Bloobles",
        imageUrl: "./resources/images/6-of-bloobles.jpg",
    },
    {
        name: "Jork of Bloobles",
        value: 7,
        suit: "Bloobles",
        imageUrl: "./resources/images/jork-of-bloobles.jpg",
    },
    {
        name: "Queeg of Bloobles",
        value: 8,
        suit: "Bloobles",
        imageUrl: "./resources/images/queeg-of-bloobles.jpg",
    },
    {
        name: "Kling of Bloobles",
        value: 9,
        suit: "Bloobles",
        imageUrl: "./resources/images/kling-of-bloobles.jpg",
    },
    {
        name: "Quazar of Bloobles",
        value: 10,
        suit: "Bloobles",
        imageUrl: "./resources/images/quazar-of-bloobles.jpg",
    }
];

/* game hand values */

const hands = [
    {
        name: 'High Card',
        value: 1,
    },
    {
        name: 'Pair',
        value: 2,
    },
    {
        name: 'Two Pair',
        value: 3,
    },
    {
        name: 'Three of a Kind',
        value: 4,
    },
    {
        name: 'Straight',
        value: 5,
    },
    {
        name: 'Flush',
        value: 6,
    },
    {
        name: 'Full House',
        value: 7,
    },
    {
        name: 'Four of a Kind',
        value: 8,
    },
    {
        name: 'Straight Flush',
        value: 9,
    },
    {
        name: 'Royal Flush',
        value: 10,
    }
];

function checkHand(userHand, flop) {
    const allCards = [...userHand, ...flop];
    allCards.sort((a, b) => a.value - b.value);
    console.log(allCards);
}

// back of cards //

const backOfCards = "./resources/images/card-back1.jpg";

// shuffle cards //

function shuffleArray(cards) {
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
};

/* variables for cards */

const yourCards = document.getElementsByClassName('your-cards');
const yourCard1 = document.getElementById('your-card1');
const yourCard2 = document.getElementById('your-card2');
const yourCard3 = document.getElementById('your-card3');

const flopCard1 = document.getElementById('flop1');
const flopCard2 = document.getElementById('flop2');
const flopCard3 = document.getElementById('flop3');
const flopCard4 = document.getElementById('flop4');
const flopCard5 = document.getElementById('flop5');

const dealerCard1 = document.getElementById('card1');
const dealerCard2 = document.getElementById('card2');
const dealerCard3 = document.getElementById('card3');

let currentCardIndex = 0;

shuffleArray(cards);

/* bet buttons clicked */

const betButtons = document.querySelectorAll('.bet-button');
betButtons.forEach((betButton) => {
  betButton.addEventListener('click', () => {
    betButtonClicked = true;
  });
});

betButtonClicked = false;

/* play button */

let userHand = [];
let flop = [];
let dealerHand = [];
let round = 0;

const playButton = document.getElementById('play');
const nextHandButton = document.getElementById('next-hand');
nextHandButton.style.display = 'none';

playButton.addEventListener('click', () => {
    info.textContent = '';
    if (round === 0) {
        if (currentCardIndex < cards.length) {
            const currentCard = cards[currentCardIndex];
            if (currentCard && currentCard.imageUrl) {
              yourCard1.src = currentCard.imageUrl;
              currentCardIndex++;
              userHand.push(currentCard);
            }
            if (currentCardIndex < cards.length) {
              const nextCard = cards[currentCardIndex];
              if (nextCard && nextCard.imageUrl) {
                yourCard2.src = nextCard.imageUrl;
                currentCardIndex++;
                userHand.push(nextCard);
              }
            }
            if (currentCardIndex < cards.length) {
              const finalCard = cards[currentCardIndex];
              if (finalCard && finalCard.imageUrl) {
                yourCard3.src = finalCard.imageUrl;
                currentCardIndex++;
                userHand.push(finalCard);
              }
            }
            flopCard1.src = backOfCards;
            flopCard2.src = backOfCards;
            flopCard3.src = backOfCards;
            flopCard4.src = backOfCards;
            flopCard5.src = backOfCards;
            dealerCard1.src = backOfCards;
            dealerCard2.src = backOfCards;
            dealerCard3.src = backOfCards;
          }
          playButton.disabled = true;
          playButton.textContent = 'Please place a bet or check';
          bet10.disabled = false;
          betMaxButton.disabled = false;
          resetButton.disabled = true;
          betToReset.push(pot);
          round = 1;
    } else if (round === 1) {
        yourCard1.src = userHand[0].imageUrl;
        yourCard2.src = userHand[1].imageUrl;
        yourCard3.src = userHand[2].imageUrl;
        if (currentCardIndex < cards.length) {
            const firstCard = cards[currentCardIndex];
            if (firstCard && firstCard.imageUrl) {
              flopCard1.src = firstCard.imageUrl;
              currentCardIndex++;
              flop.push(firstCard);
            }
            if (currentCardIndex < cards.length) {
              const secondCard = cards[currentCardIndex];
              if (secondCard && secondCard.imageUrl) {
                flopCard2.src = secondCard.imageUrl;
                currentCardIndex++;
                flop.push(secondCard);
              }
            }
            if (currentCardIndex < cards.length) {
              const thirdCard = cards[currentCardIndex];
              if (thirdCard && thirdCard.imageUrl) {
                flopCard3.src = thirdCard.imageUrl;
                currentCardIndex++;
                flop.push(thirdCard);
              }
            }
          }
          playButton.disabled = true;
          playButton.textContent = 'Please place a bet or check';
          resetButton.disabled = true;
          betToReset.push(pot);
          round = 2;
    } else if (round === 2) {
        yourCard1.src = userHand[0].imageUrl;
        yourCard2.src = userHand[1].imageUrl;
        yourCard3.src = userHand[2].imageUrl;
        flopCard1.src = flop[0].imageUrl;
        flopCard2.src = flop[1].imageUrl;
        flopCard3.src = flop[2].imageUrl;
        if (currentCardIndex < cards.length) {
            const fourthCard = cards[currentCardIndex];
            if (fourthCard && fourthCard.imageUrl) {
              flopCard4.src = fourthCard.imageUrl;
              currentCardIndex++;
              flop.push(fourthCard);
            }
          }
          playButton.disabled = true;
          playButton.textContent = 'Please place a bet or check';
          resetButton.disabled = true;
          betToReset.push(pot);
          round = 3;
    } else if (round === 3) {
        yourCard1.src = userHand[0].imageUrl;
        yourCard2.src = userHand[1].imageUrl;
        yourCard3.src = userHand[2].imageUrl;
        flopCard1.src = flop[0].imageUrl;
        flopCard2.src = flop[1].imageUrl;
        flopCard3.src = flop[2].imageUrl;
        flopCard4.src = flop[3].imageUrl;
        if (currentCardIndex < cards.length) {
            const fifthCard = cards[currentCardIndex];
            if (fifthCard && fifthCard.imageUrl) {
                flopCard5.src = fifthCard.imageUrl;
                currentCardIndex++;
                flop.push(fifthCard);
            }
        }
        playButton.disabled = true;
        playButton.textContent = 'Please place a bet or check';
        resetButton.disabled = true;
        betToReset.push(pot);
        round = 4;
    } else if (round === 4) {
        yourCard1.src = userHand[0].imageUrl;
        yourCard2.src = userHand[1].imageUrl;
        yourCard3.src = userHand[2].imageUrl;
        flopCard1.src = flop[0].imageUrl;
        flopCard2.src = flop[1].imageUrl;
        flopCard3.src = flop[2].imageUrl;
        flopCard4.src = flop[3].imageUrl;
        flopCard5.src = flop[4].imageUrl;
        if (currentCardIndex < cards.length) {
            const dealer1 = cards[currentCardIndex];
            if (dealer1 && dealer1.imageUrl) {
                dealerCard1.src = dealer1.imageUrl;
                currentCardIndex++;
                dealerHand.push(dealer1);
            }
        }
        if (currentCardIndex < cards.length) {
            const dealer2 = cards[currentCardIndex];
            if (dealer2 && dealer2.imageUrl) {
                dealerCard2.src = dealer2.imageUrl;
                currentCardIndex++;
                dealerHand.push(dealer2);
            }
        }
        if (currentCardIndex < cards.length) {
            const dealer3 = cards[currentCardIndex];
            if (dealer3 && dealer3.imageUrl) {
                dealerCard3.src = dealer3.imageUrl;
                currentCardIndex++;
                dealerHand.push(dealer3);
            }
        }
        playButton.disabled = true;
        playButton.style.display = 'none';
        nextHandButton.style.display = 'block';
        bet10.disabled = true;
        betMaxButton.disabled = true;
        resetButton.disabled = true;
        round = 0;
        currentBet = 0;
        computerBet = 0;
        currentCardIndex = 0;
        checkHand(userHand, flop);
        shuffleArray(cards);
        userHand = [];
        flop = [];
        dealerHand = [];
    }
});

/* win game function */

function winGame(glorblesTotal) {
    if (glorblesTotal === 1000) {
        info.textContent = 'Congratulations! You beat the dealer and won the game!';
    }
};

/* next hand button */

nextHandButton.addEventListener('click', () => {
    yourCard1.src = backOfCards;
    yourCard2.src = backOfCards;
    yourCard3.src = backOfCards;
    flopCard1.src = backOfCards;
    flopCard2.src = backOfCards;
    flopCard3.src = backOfCards;
    flopCard4.src = backOfCards;
    flopCard5.src = backOfCards;
    dealerCard1.src = backOfCards;
    dealerCard2.src = backOfCards;
    dealerCard3.src = backOfCards;
    glorblesTotal += pot;
    glorblesDisplay.textContent = glorblesTotal;
    pot = 0;
    potDisplay.textContent = pot;
    nextHandButton.style.display = 'none';
    playButton.style.display = 'block';
    playButton.disabled = false;
    winGame(glorblesTotal);
});

/* bet 10 button */

const bet10 = document.getElementById('bet-10');
const glorblesDisplay = document.getElementById('glorbles');
const dealerGlorblesDisplay = document.getElementById('dealer-glorbles');
const potDisplay = document.getElementById('pot');
let glorblesTotal = 500;
let dealerGlorbles = 500;
let currentBet = 0;
let computerBet = 0;
let pot = 0;
glorblesDisplay.textContent = glorblesTotal;
dealerGlorblesDisplay.textContent = dealerGlorbles;
potDisplay.textContent = pot;

const betStats = [glorblesTotal, dealerGlorbles, pot];
let betToReset = betStats;

/* bet 10 button */

bet10.disabled = true;

bet10.addEventListener('click', () => {
    pot = betToReset[2];
    currentBet += 10;
    computerBet += 10;
    glorblesTotal -= 10;
    dealerGlorbles -= 10;
    pot = currentBet + computerBet;
    betToReset.push(pot);
    console.log(`Glorbles: ${glorblesTotal}, Dealer Glorbles: ${dealerGlorbles}, Pot: ${pot}`);
    if (glorblesTotal < 0) {
        glorblesDisplay.classList.add('glorbles-red');
    } else {
        glorblesDisplay.classList.remove('glorbles-red');
    }
    glorblesDisplay.textContent = glorblesTotal;
    dealerGlorblesDisplay.textContent = dealerGlorbles;
    potDisplay.textContent = betToReset.pop();
    playButton.disabled = false;
    playButton.textContent = 'Play';
    resetButton.disabled = false;
});

/* bet max button */

const betMaxButton = document.getElementById('bet-max');
const info = document.getElementById('info');

betMaxButton.disabled = true;

betMaxButton.addEventListener('click', () => {
    if (glorblesTotal === 0) {
        info.innerText = 'You have no Glorbles to bet with!';
    }
    currentBet = glorblesTotal;
    computerBet = dealerGlorbles;
    pot += currentBet + computerBet;
    betToReset.push(pot);
    glorblesTotal -= currentBet;
    dealerGlorbles -= computerBet;
    glorblesDisplay.textContent = glorblesTotal;
    dealerGlorblesDisplay.textContent = dealerGlorbles;
    potDisplay.textContent = pot;
    betMaxButton.disabled = true;
    bet10.disabled = true;
    playButton.disabled = false;
    playButton.textContent = 'Play';
    resetButton.disabled = false;
});

/* fold button */

const foldButton = document.getElementById('fold');

foldButton.addEventListener('click', () => {

});

/* reset bet button */

const resetButton = document.getElementById('reset-bet');

resetButton.addEventListener('click', () => {
    if (betButtonClicked && round === 0) {
        currentBet = 0;
        computerBet = 0;
        glorblesTotal = betToReset[0];
        dealerGlorbles = betToReset[1];
        betToReset.push(pot);
        pot = betToReset[2];
        betToReset.push(pot);
        console.log("Pot Value: " + pot);
        glorblesDisplay.textContent = glorblesTotal;
        dealerGlorblesDisplay.textContent = dealerGlorbles;
        potDisplay.textContent = pot;
        bet10.disabled = false;
        betMaxButton.disabled = false;
    } else if (betButtonClicked && round === 1) {
        currentBet = 0;
        computerBet = 0;
        pot = betToReset.pop();
        potDisplay.textContent = pot;
        console.log("Pot Value: " + pot);
    } else if (betButtonClicked && round === 2) {
        currentBet = 0;
        computerBet = 0;
        pot = betToReset.pop();
        potDisplay.textContent = pot;
        console.log("Pot Value: " + pot);
    } else if (betButtonClicked && round === 3) {
        currentBet = 0;
        computerBet = 0;
        pot = betToReset.pop();
        potDisplay.textContent = pot;
        console.log("Pot Value: " + pot);
    } else if (betButtonClicked && round === 4) {
        currentBet = 0;
        computerBet = 0;
        pot = betToReset.pop();
        potDisplay.textContent = pot;
        console.log("Pot Value: " + pot);
        resetButton.disabled = true;
    }
});

/* check button */

const checkButton = document.getElementById('check');

checkButton.addEventListener('click', () => {
    playButton.disabled = false;
    playButton.textContent = 'Play';
});
  


