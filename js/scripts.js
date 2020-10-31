// Variables
var DIVIDES_TO_THREE = 'Fizz';
var DIVIDES_TO_FIVE = 'Buzz';
var DIVIDES_TO_THREE_AND_FIVE = 'FizzBuzz';

// Choosing elements
var gameForm = document.querySelector('.game-form');
var gameResult = document.querySelector('.game-result');

gameForm.addEventListener('submit', function (evt) {
  evt.preventDefault();

  // Taking value of number input
  var gameNumberInput = parseInt(gameForm.querySelector('.game-number-input').value.trim(), 10);

  if (!isNaN(gameNumberInput)) {
    gameResult.classList.add('bg-info');
    gameResult.classList.remove('alert', 'alert-danger', 'text-dark');
    if (gameNumberInput % 3 == 0 && gameNumberInput % 5 == 0) {
      gameResult.textContent = DIVIDES_TO_THREE_AND_FIVE;
    } else if (gameNumberInput % 3 == 0) {
      gameResult.textContent = DIVIDES_TO_THREE;
    }
    else if (gameNumberInput % 5 == 0) {
      gameResult.textContent = DIVIDES_TO_FIVE;
    }
    else {
      gameResult.textContent = gameNumberInput;
    }
  } else {
      gameResult.textContent = 'Iltimos, son kiriting )';
      gameResult.classList.add('alert', 'alert-danger', 'text-dark');
      gameResult.classList.remove('bg-info');
  }
});
