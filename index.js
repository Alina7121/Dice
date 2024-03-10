//Dice Roller
function rollDice() {//get the number of dice
const numOfDice= document.getElementById('numOfDice').value;//this line retreaves the value of the number of dice from the input field
const diceResult= document.getElementById('diceResult');//This element will be used to display the result of rolling the dice.
const diceImages= document.getElementById('diceImages');// This element will be used to display images of the rolled dice.
const values = [];// These lines initialize two arrays, values and images, which will store the values of the rolled dice and the HTML code for displaying the corresponding dice images, respectively.
const images = [];//the HTML code for displaying the corresponding dice images, respectively.

for(let i = 0; i< numOfDice; i++){
    const value = Math.floor(Math.random() * 6) + 1;//This is a for loop that iterates numOfDice times. Inside the loop, a random number between 1 and 6 (inclusive) is generated, representing the result of rolling one die. The value is then pushed into the values array, and the corresponding HTML code for the dice image is pushed into the images array.
values.push(value);
images.push(`<img src="images/${value}.png" alt="Dice ${value}">`);
}
diceResult.textContent = `dice: ${values.join(', ')}`;
diceImages.innerHTML = images.join('');
}