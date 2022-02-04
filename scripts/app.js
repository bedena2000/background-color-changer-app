// Create Array with color names
const colors = ['blue', 'yellow', 'red', 'green', 'AliceBlue', 'AntiqueWhite', 'Aqua', 'BlueViolet', 'Brown', 'Beige'];
// Get Colors Array length for generate a random number
const colorNumber = colors.length;
// Get Clicked Button
const clickButton = document.querySelector(".button");
// On Click make to change background color
const changeColor = () => {
   // Generate A Random Number
   const randomNumber = Math.floor(Math.random() * colorNumber);
   // Get background HMTL item
   const background = document.querySelector(".body-wrapper");
   // Change color to random from color array
   background.style.backgroundColor = colors[randomNumber];
};
// On Click Pass this changeColor function into click button
clickButton.addEventListener("click", changeColor);