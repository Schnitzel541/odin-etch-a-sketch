let gridContainer = document.querySelector(".gridContainer");


function generateGrid(gridSize) {
    const gridContainerSize = 512;
    const squareSize = gridContainerSize / gridSize;

    for (let i = 0; i < gridSize * gridSize ; i++) {
        let square = document.createElement("div");
        square.style.backgroundColor = "blue";
        square.classList.add("square");

        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;

        gridContainer.insertAdjacentElement("beforeend", square);
    }
}

generateGrid(18);