// Variable to store the player's score
let score = 0;

// Function to update and display the player's score
const updateScore = () => {
  const scoreElement = document.querySelector(".score");
  scoreElement.innerText = `Score: ${score}`;
};


const keyboard = document.querySelector(".keyboard");
const h4 = document.querySelector("h4");
const wordDisplay = document.querySelector(".word-display");
const chance = document.querySelector(".chance");
const img = document.querySelector(".img");

const gameover = document.querySelector(".GameOver");
const gameoverimg = document.querySelector(".gameoverImg");
const answer = document.querySelector(".answer");
const h3 = document.querySelector("h3");
const h6 = document.querySelector("h6");

let count = 0;

let gameStarted = false; // Flag to check if the game has started

const randomIndex = Math.floor(Math.random() * wordList.length);
const { word, hint } = wordList[randomIndex];
for (var i = 97; i <= 122; i++) {
  let button = document.createElement("button");
  button.classList.add("btn");
  button.innerHTML = String.fromCharCode(i);
  keyboard.appendChild(button);
}


const gameOver = (bool) => {
  const gameOverAudio = document.getElementById('gameOverAudio');
  const victoryAudio = document.getElementById('victoryAudio');

  if (bool) {
    gameover.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    answer.innerText = word;

    // Deduct points on losing
    score = 0;
    updateScore();

     // Play audio when the player loses the game
     gameOverAudio.play();
  } else {
    gameover.classList.add("show");
    document.querySelector(".game").style.opacity = 0.8;
    gameoverimg.src = "images/victory2.gif";
    h3.innerText="Congrats!"
    
    // Add points on winning
    score += 10;
    updateScore();

    h6.innerText="You Guessed The Correct Answer!"

     // Play "Victory" audio when the player wins the game
     victoryAudio.play();
  }
};

const gameOverwin = () => {
  const letterElem = document.querySelectorAll(".letter");
  var matchLetter = "";

  letterElem.forEach((v) => {
    matchLetter += v.innerText.toLowerCase();
  });
  if (matchLetter === word) {
    gameOver(false);
  }
};

const matchWord = (val) => {
  const isSpace = word.includes(' ') && val === ' ';

  if (isSpace) {
    return; // Ignore spaces
  }

  const matches = [];
  //console.log(word);
  word.split("").forEach((el, index) => {
    if (el === val.toLowerCase()) {
      matches.push(index);
    }
  });

  if (matches.length === 0) {
    count++;
    //matches.disabled= true;
    chance.innerText = `${count}/6`;
  } else {
    matches.forEach((v) => {
      const letterElem = document.querySelectorAll(".letter");
      letterElem[v].innerText = val;
      letterElem[v].classList.add("guess");
      
    });
  }
};


const loadQuestion = () => {
  h4.innerText = `Hint: ${hint}`;

  for (let i = 0; i < word.length; i++) {
    let liTag = document.createElement("li");
    liTag.classList.add("letter");
  
 
    wordDisplay.appendChild(liTag);
  }

  const buttonTag = document.querySelectorAll(".btn");

  buttonTag.forEach((v) => {
    v.addEventListener("click", (e) => {
      const clickedButton = e.target;
      matchWord(e.target.innerText);
       // Add a 'disabled' class to the clicked button
    clickedButton.classList.add("disabled");
     // Disable the button to prevent further clicks
     clickedButton.disabled = true;

     // const letterElem = document.querySelectorAll(".letter");

      if (count >= 1 && count < 2) {
        img.src = "images/hangman-1.svg";
      } else if (count >= 2 && count < 3) {
        img.src = "images/hangman-2.svg";
      } else if (count >= 3 && count < 4) {
        img.src = "images/hangman-4.svg";
      } else if (count >= 4 && count < 5) {
        img.src = "images/hangman-5.svg";
      } else if (count >= 6 && count < 7) {
        img.src = "images/hangman-6.svg";
        setTimeout(()=>{
          gameOver(true);
        },200)
    
      }
      gameOverwin();
    });
  }
  );
};

document.getElementById('startButton').addEventListener('click', startGame);
function startGame() {
  if (!gameStarted) {
    // Clear any existing content in the word display
    wordDisplay.innerHTML = '';

    let button = document.createElement("button");
    button.classList.add("btn")
        button.innerHTML = String.fromCharCode(i);
        keyboard.appendChild(button);

        loadQuestion();
        gameStarted = true; // Set the flag to true to indicate that the game has started

        // Hide the start modal
        document.getElementById('startModal').style.display = 'none';
      }
    }






