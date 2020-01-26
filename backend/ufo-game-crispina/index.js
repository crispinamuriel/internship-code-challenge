
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
    this.word = word.toLowerCase();
    this.guessed =  [];
    this.status =  'playing';
  }

  displayStatusMessage() {
    if(this.status === 'failed') loseMessage();
    if(this.status === 'win') winMessage();
    if(this.status === 'playing') currentStatus();
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

