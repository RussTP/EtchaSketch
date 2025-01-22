const container = document.querySelector("#squareContainer");
let column = 16;
let row = 16;
let gridTotal = column * row;


//loop to create 16x16 grid 
function gridCreate () {
for (let i = 0; i < gridTotal; i++) {
    const square = document.createElement("div");
    square.id = "square" +i;
    square.className = "square";
    container.appendChild(square);

//square box event listener w/random colour
square.addEventListener("mouseenter", (e) => {
    const color = randomRgbColor();
    e.preventDefault();
    square.style.backgroundColor = color;
});

container.appendChild(square);
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
    let gridPrompt = parseInt(prompt("Please enter the grid size you'd like:"));
    if (isNaN(gridPrompt) || gridPrompt < 1 || gridPrompt > 100) {
        alert("Please enter a valid amount of rows and columns", 16);

    }else {
        container.innerHTML = "";
        gridTotal = gridPrompt * gridPrompt;  
        gridCreate(gridTotal);
    }
    });




