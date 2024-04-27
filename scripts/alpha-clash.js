// function play() {
//     //Step - 1 : Hide the home screen
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden');

//     //Step - 2 : Show the playground
//     const playgroundSection = document.getElementById('play-ground');
//     playgroundSection.classList.remove('hidden');
// }


function play() {
    hideElementById('home-screen');
    showElementById('play-ground');
}