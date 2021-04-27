let userFirstName = prompt("Please enter your first name")
let userLastName = prompt("Please enter your last name")
let userFavouriteColour = prompt("Please enter your favourite colour")

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

alert("Your password is " + userFirstName + userLastName + userFavouriteColour + getRandomInt(201))

