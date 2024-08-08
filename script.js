let gridContainer = document.querySelector(".gridContainer");
let colorWheel = document.querySelector("#colorWheel");
let gridSizeInput = document.querySelector("#gridSizeInputs");

function generateGrid(gridSize) {
    gridContainer.innerHTML = "";
    const gridContainerSize = 512;
    const squareSize = gridContainerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize ; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        gridContainer.insertAdjacentElement("beforeend", square);

        square.addEventListener('mousemove', () => {
            square.style.backgroundColor = `${colorWheel.value}`
        })
    }
}

generateGrid(32);