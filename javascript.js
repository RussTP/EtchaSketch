const container = document.querySelector("#squareContainer");

let column = 16;
let row = 16;
let gridTotal = column * row;

//loop to create 16x16 grid 
function gridCreate (gridSize = 16) {
    container.innerHTML = "";
    const squareSize = 100 /gridSize;

    for (let i = 0; i < gridSize * gridSize; i++) {
    const square = document.createElement("div");
    square.id = "square" +i;
    square.className = "square";
    square.style.width = `${squareSize}%`;
    square.style.height = `${squareSize}%`;
    container.appendChild(square);

//square box event listener w/random colour
square.addEventListener("mouseenter", (e) => {
    const color = randomRgbColor();
    e.preventDefault();
    square.style.backgroundColor = color;
        });
    }
}


//Random number generator for random colours
function randomNumber(max) {
    return Math.floor(Math.random() * (max +1));
}

function randomRgbColor() {
    let r = randomNumber(255);
    let g = randomNumber(255);
    let b = randomNumber(255);
    return `rgb(${r}, ${g}, ${b})`;
}



  gridCreate();


// new grid creation

const button = document.querySelector("button");
button.addEventListener("click", () => {
    let gridPrompt = parseInt(prompt("Please enter the grid size you'd like: (1- 100):"));
    if (isNaN(gridPrompt) || gridPrompt < 1 || gridPrompt > 100) {
        alert("Please enter a valid amount of rows and columns.");

    }else {
        gridCreate(gridPrompt);
    }
    });




