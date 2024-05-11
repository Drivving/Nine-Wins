// script.js
const homeButton = document.getElementById('home-button');
const slideButton = document.getElementById('slide-button');
const homePage = document.querySelector('.home-page');
const gamePage = document.querySelector('main');

homeButton.addEventListener('click', () => {
    homePage.style.display = 'block'; // Show home page
    gamePage.style.display = 'none'; // Hide game page
});

slideButton.addEventListener('click', () => {
    homePage.style.display = 'none'; // Hide home page
    gamePage.style.display = 'block'; // Show game page
});

const arrow = document.querySelector('.arrow');
const playButton = document.getElementById('play-button');
const redButton = document.getElementById('red-button');
const purpleButton = document.getElementById('purple-button');
const balanceDisplay = document.getElementById('balance');

let balance = 100; // Initial balance

playButton.addEventListener('click', () => {
    const randomPosition = Math.floor(Math.random() * 280);
    const randomColor = getRandomColor();

    moveArrow(randomPosition);
    changeArrowColor(randomColor);

    // Check if the chosen color matches the random color
    if ((redButton.classList.contains('selected') && randomColor === 'red') ||
        (purpleButton.classList.contains('selected') && randomColor === 'purple')) {
        doubleBalance();
    }

    updateBalanceDisplay();
});

// Rest of the existing code...

redButton.addEventListener('click', () => {
    redButton.classList.add('selected');
    purpleButton.classList.remove('selected');
});

purpleButton.addEventListener('click', () => {
    purpleButton.classList.add('selected');
    redButton.classList.remove('selected');
});

function getRandomColor() {
    const colors = ['red', 'purple'];
    return colors[Math.floor(Math.random() * colors.length)];
}

function moveArrow(position) {
    const arrow = document.querySelector('.arrow'); // Move this line here
    arrow.style.left = `${position}px`;
}

function changeArrowColor(color) {
    const arrow = document.querySelector('.arrow'); // Move this line here
    arrow.style.backgroundColor = color;
}

function doubleBalance() {
    balance *= 2; // Double the bet amount
}

function updateBalanceDisplay() {
    balanceDisplay.textContent = `Balance: $${balance}`;
}

