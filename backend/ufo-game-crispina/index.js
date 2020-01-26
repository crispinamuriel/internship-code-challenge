
function getWord() {
  let fs = require("fs");
  let text = fs.readFileSync("./nouns.txt", "utf8");
  let wordsArr = text.split("\n");

  let coinFlip = Math.floor(Math.random() * wordsArr.length);
  let word = wordsArr[coinFlip];
  return word;
}


console.log(getWord());

