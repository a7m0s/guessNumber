'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = 'Correct Number !!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 20;

document.querySelector('.guess').value = 25;
console.log(document.querySelector('.guess').value);


let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !!';
  }
  // if correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // if (highScore < score) {
    //   highScore = document.querySelector('.highscore').textContent = score;
    // } else {
    //   highScore = document.querySelector('.highscore').textContent = highScore;
    // }
    // better solution
    if (score > highScore) {
      highScore = document.querySelector('.highscore').textContent = score;
    }
  }
  // if too high
  else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too high 📈';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
  // if too low
  else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'too low 📉';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = ' You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});


// another professional solution < refactoring >

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No Number !!';
  }
  // if correct number
  else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    // if (highScore < score) {
    //   highScore = document.querySelector('.highscore').textContent = score;
    // } else {
    //   highScore = document.querySelector('.highscore').textContent = highScore;
    // }
    // better solution
    if (score > highScore) {
      highScore = document.querySelector('.highscore').textContent = score;
    }
  }
  // when guess is wrong
  else if (guess != secretNumber) {
    if (guess > secretNumber) {
      document.querySelector('.message').textContent = 'too high 📈';
    } else if (guess < secretNumber) {
      document.querySelector('.message').textContent = 'too low 📉';
    } else {
      document.querySelector('.message').textContent = ' You Lost The Game';
      document.querySelector('.score').textContent = 0;
    }
    score--;
    document.querySelector('.score').textContent = score;
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

*/

// another jonas solution with ternary operator

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // if no number
  if (!guess) {
    displayMessage('⛔ No Number !!');
  }
  // if correct number
  else if (guess === secretNumber) {
    displayMessage('🥳 Correct Number !!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = document.querySelector('.highscore').textContent = score;
    }
  }
  // when guess is wrong
  else if (guess != secretNumber) {
    if (score > 1) {
      displayMessage(guess < secretNumber ? 'too low 📉' : 'too high 📈');
      score--;
      displayScore(score);
    } else {
      displayMessage(' You Lost The Game');
      displayScore(0);
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displayMessage('Start guessing...');
  displayScore(score);
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
