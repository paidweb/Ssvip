// Activate Features
function activateFeature(feature) {
    const bigSmallSection = document.getElementById('big-small-section');
    const numberSection = document.getElementById('number-section');
    const minesSection = document.getElementById('mines-section');

    // Hide all sections
    bigSmallSection.classList.add('hidden');
    numberSection.classList.add('hidden');
    minesSection.classList.add('hidden');

    // Show selected section
    if (feature === 'bigSmall') {
        bigSmallSection.classList.remove('hidden');
    } else if (feature === 'number') {
        numberSection.classList.remove('hidden');
    } else if (feature === 'mines') {
        minesSection.classList.remove('hidden');
        createMinesGrid();
    }

    // Highlight the active button
    const buttons = document.querySelectorAll('.navbar button');
    buttons.forEach(button => button.classList.remove('active'));
    document.getElementById(`${feature}Btn`).classList.add('active');
}

// Generate Random Big/Small
function generateBigSmall() {
    const resultBox = document.getElementById('big-small-result');
    const result = Math.random() > 0.5 ? 'Big' : 'Small';
    resultBox.textContent = result; // Update the result text
    resultBox.classList.add('highlight');
    setTimeout(() => resultBox.classList.remove('highlight'), 2000); // Remove highlight after 2 seconds
}

// Generate Random Number (1-9)
function generateNumber() {
    const resultBox = document.getElementById('number-result');
    const result = Math.floor(Math.random() * 9) + 1; // Random number between 1 and 9
    resultBox.textContent = result; // Update the result text
    resultBox.classList.add('highlight');
    setTimeout(() => resultBox.classList.remove('highlight'), 2000); // Remove highlight after 2 seconds
}

// Create 5x5 Mines Grid
function createMinesGrid() {
    const gridContainer = document.querySelector('#mines-section .grid');
    gridContainer.innerHTML = ''; // Clear existing grid

    for (let i = 0; i < 25; i++) {
        const box = document.createElement('div');
        box.className = 'grid-box'; // Add a class for styling
        gridContainer.appendChild(box);
    }
}

// Highlight 4 Random Boxes for Mines
function highlightRandomBoxes() {
    const boxes = document.querySelectorAll('#mines-section .grid .grid-box');
    boxes.forEach(box => box.classList.remove('highlight')); // Remove previous highlights

    const randomIndices = [];
    while (randomIndices.length < 4) {
        const randomIndex = Math.floor(Math.random() * boxes.length);
        if (!randomIndices.includes(randomIndex)) {
            randomIndices.push(randomIndex);
        }
    }

    randomIndices.forEach(index => {
        boxes[index].classList.add('highlight');
    });
}