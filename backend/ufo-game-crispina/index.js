const shipArr = require('./ufo');

function getWord() {
  let fs = require("fs");
  let text = fs.readFileSync("./nouns.txt", "utf8");
  let wordsArr = text.split("\n");

  let coinFlip = Math.floor(Math.random() * wordsArr.length);
  let word = wordsArr[coinFlip];
  return word;
}


console.log(getWord());

class UFO  {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessed =  [];
    this.status =  'playing';
    this.remainingGuesses  =  remainingGuesses;
  }

  displayStatusMessage() {
    if(this.status === 'failed') this.loseMessage();
    if(this.status === 'win') this.winMessage();
    if(this.status === 'playing') this.currentStatus();
  }

  loseMessage() {
    console.log('you lose');
    this.currentStatus();
  }

  winMessage() {
    console.log('you win');
  }

  currentStatus() {
    const remaining = this.remainingGuesses;
    console.log(shipArr[remaining]);
  }

  calculateStatus() {
    const win = this.word.every((letter) => this.guessed.includes(letter));

    if(this.remainingGuesses === 0)  {
      this.status = 'failed';
    } else if (win) {
      this.status = 'win';
    } else {
      this.status = 'playing';
    }
    this.displayStatusMessage();
  }

  getPuzzle() {
    let puzzle =  '';
    this.word.forEach((letter) => {
      if(this.guessed.includes(letter)) {
        puzzle += letter;
      } else {
        puzzle += '_';
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    guess =  guess.toLowerCase();
    const isUnique = !this.guessed.includes(guess);
    const isBadGuess =  !this.word.includes(guess);

    if(this.status !== 'playing')  {
      this.calculateStatus();
      return
    }
    if(isUnique) {
      this.guessed.push(guess);
    }
    if(isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    this.calculateStatus();
  }
}

const startGame  = async() => {
  const word = await getWord();
  let game1 = new UFO(word, 6);
  while (game1.status === "playing") {

    console.log(shipArr[5]);
    for(let i = 0; i < 6; i++){
      console.log("hi");
      game1.remainingGuesses--;
      console.log(game1.remainingGuesses);
      game1.calculateStatus();
      // if(game1.remainingGuesses < 2)  game1.status = 'failed'
    }
  }
}

startGame();


