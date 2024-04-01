var firstCard = Math.floor(Math.random() * 10) + 2;
var secondCard = Math.floor(Math.random() * 10) + 2;
let sum = firstCard + secondCard;
let hasBlackJack = false;
let isAlive = true;

if (sum <= 20){
    console.log('Do you want to draw a new card?')
} else if (sum === 21){
    console.log("Woohoo! You've got Blackjack!")
    hasBlackJack = true;
} else {
    console.log("You're out of the game!")
    isAlive = false;
}

console.log(4 === 3)  // false
console.log(5 > 2)    // true
console.log(12 > 12)  // false
console.log(3 < 0)    // false
console.log(3 >= 3)   //  true
console.log(11 <= 11) // true
console.log(3 <= 2)   // false