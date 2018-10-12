/* Creator: steppe
Date Created 10 / 11 / 18
Date last modified: 10 / 11 / 18 */


  //      Math.random() * 6;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}
for (var i = 0; i < 100; i++) {
    console.log(rollDice());
}

funtion rollDice2(numSides) {
    return Math.floor(Math.random() * numSides) + 1;
}



