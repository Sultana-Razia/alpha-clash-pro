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

    //Check matched or not
    if (playerPressed == expectedAlphabet) {
        console.log('You get a point');
    }
    else {
        console.log('You missed. You lost a life');
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