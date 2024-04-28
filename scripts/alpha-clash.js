// function play() {
//     //Step - 1 : Hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //Step - 2 : Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }

function handleKeyboardKeyUpEvent(event) {
    const playerPressed = event.key;


    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed, expectedAlphabet);

    //check matched or not
    if (playerPressed == expectedAlphabet) {
        console.log('You get a point');

        //get the current score
        const currentScoreElement = document.getElementById('current-score');
        const currentScoreText = currentScoreElement.innerText;
        const currentScore = parseInt(currentScoreText);

        //increase the score
        const newScore = currentScore + 1;

        //show the update score
        currentScoreElement.innerText = newScore;

        //start a new round
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else {
        console.log('You missed. You lost a life');
        //get the current life number
        const currentLifeElement = document.getElementById('current-life');
        const currentLife = parseInt(currentLifeElement.innerText);

        //reduce the life count
        const newLife = currentLife - 1;

        //display the updated life count
        currentLifeElement.innerText = newLife;

    }
}

document.addEventListener('keyup', handleKeyboardKeyUpEvent);


function continueGame() {
    //Generate a random alphabet
    const alphabet = getARandomAlphabet();

    //Set  randomly generated  alphabet to the screen
    const currentAlphabetElement = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;

    //Set background color
    setBackgroundColorById(alphabet);
}

function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
    continueGame();
}