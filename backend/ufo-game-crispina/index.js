const shipArr = require('./ufo');

function getWord() {
  let fs = require('fs');
  let text = fs.readFileSync('./nouns.txt', 'utf8');
  let wordsArr = text.split('\n');
  let coinFlip = Math.floor(Math.random() * wordsArr.length - 1);
  let word = wordsArr[coinFlip];
  return word;
}


class UFO  {
  constructor(word, remainingGuesses) {
    this.word = word.toLowerCase().split('');
    this.guessed = [];
    this.status = 'playing';
    this.remainingGuesses = remainingGuesses;
  }

  welcomeMessage(){
    console.log('Welcome to Ms.Muriel\'s guessing game! Guess the code word or be abducted!');
    console.log('Please enter a guess.');
  }

  displayStatusMessage() {
    if (this.status === 'failed') this.loseMessage();
    if (this.status === 'win') this.winMessage();
    if (this.status === 'playing') this.currentStatus();
  }

  loseMessage() {
    this.currentStatus();
    console.log(`Whoops, You ran out of guesses! The word was ${this.word.join('')} Say goodbye to earth!`);
  }

  winMessage() {
    console.log(`You guessed the word '${this.word.join('')}'! \n You Win! No aliens for you!`);
  }

  currentStatus() {
    const remaining = this.remainingGuesses;
    console.log(shipArr[remaining]);
  }

  calculateStatus() {
    const win = this.word.every((letter) => this.guessed.includes(letter));

    if (this.remainingGuesses === 0)  {
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
        puzzle += '_ ';
      }
    });
    return puzzle;
  }

  makeGuess(guess) {
    guess =  guess.toLowerCase();
    const isUnique = !this.guessed.includes(guess);
    const isBadGuess =  !this.word.includes(guess);

    if (this.status !== 'playing')  {
      this.calculateStatus();
      console.log(this.status)
      return
    }
    if (isUnique) {
      this.guessed.push(guess);
    }
    if (isUnique && isBadGuess) {
      this.remainingGuesses--;
    }
    // this.calculateStatus();
    // console.log(this.word);
  }
}


const startGame  = async() => {
  const readline = require('readline-sync');
  const word = await getWord();
  let game1 = new UFO(word, 6);
  console.log(shipArr[5]);
  game1.welcomeMessage();

  while (game1.status === 'playing') {
    console.log(game1.getPuzzle());
    const guess = readline.question('Type a letter, then press RETURN here: ');
    game1.makeGuess(guess);
    console.log('Guesses Remaining: ', game1.remainingGuesses);
    if (game1.remainingGuesses < 1)  game1.status = 'failed'
    game1.displayStatusMessage();
  }
  const play = readline.question('Play again? Type YES or NO: ');
  if (play.toUpperCase() === 'YES') startGame();
  if (play.toUpperCase() === 'NO') console.log('Thank you for playing! Goodbye.')
}

startGame();

