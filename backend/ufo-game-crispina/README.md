# UFO: The Game
Hello 👋 This game was written by Crispina Muriel,
in Javascript,
on 1/25/2020.
```
                 .
                 |
              .-"^"-.
             /_.UFO._\
         .-"`         `"-.
        (  ooo  ooo  ooo  )
         '-.,_________,.-'   ,-----------.
               /   \        (  Send help! )
              /     \      / `-----------'
             /   O   \    /
            /  --|--  \
           /     |     \
          /     / \     \
```

Invaders from outer space have arrived and are abducting humans using tractor beams. Earn your medal of honor by cracking the codeword to stop the abduction!

## How to play:

clone or download Crispina's game files [here](https://github.com/crispinamuriel/internship-code-challenge/tree/master/backend/ufo-game-crispina)

#### below are `CLI commands` to follow:

cd into directory:  `cd ufo-game-crispina`

npm install:  `npm install`

start game:  `node index.js`

## Gameplay / Rules:

Guess one letter at a time of a codeword represented by blank placeholders for each letter. If the letter does not exist in the codeword, the person is pulled in closer to the UFO by the tractor beam. If the letter exists, the blanks that correspond to the position of those letters in the codeword are replaced by the letter. If all the letters of the codeword are revealed before the person is pulled into the UFO, you win. Otherwise, the UFO abducts the person and you lose.
