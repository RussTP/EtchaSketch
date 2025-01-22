const container = document.querySelector("#squareContainer");
let column = 16;
let row = 16;
//loop to create 16x16 grid 
function gridCreate () {

for (let i = 0; i < column * row; i++) {
    const square = document.createElement("div");
    square.id = "square" +i;
    square.className = "square";
    container.appendChild(square);



//eventListener to change colour when mouse enters

square.addEventListener("mouseenter", (e) => {
e.target.classList.add("color");
            });
        } 
    }

    gridCreate();

// rows * columns to create a new grid  

const button = document.querySelector("button");
button.addEventListener("click", () => {
    column = parseInt(prompt("Please enter the number of rows"));
    row = parseInt(prompt("Please enter the number of columns"));
    if (isNaN(row) || isNaN(column) || row < 1 || column < 1) {
        alert("Please enter a valid amount of rows and columns");

    }else {
        container.innerHTML = "";   
        const gridTotal = column * row;
        gridCreate(gridTotal);
    }
    });




