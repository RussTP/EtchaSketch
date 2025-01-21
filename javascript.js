const container = document.querySelector("#squareContainer");
//loop to create 16x16 grid 
for (let i = 0; i < 256; i++) {
    const square = document.createElement("div");
    square.id = "square" +i;
    square.className = "square";
    container.appendChild(square);
    
};

//eventListener to change colour when mouse enters
let colors = document.querySelectorAll(".square");
colors.forEach((color) => {
color.addEventListener("mouseenter", (e) => {
e.target.classList.add("color");
})
}) 
//eventListener to remove colour when mouse leaves
colors.forEach((color) => {
    color.addEventListener("mouseleave", (e) =>{
    e.target.classList.remove("color");   
});
});


