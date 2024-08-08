let gridContainer = document.querySelector(".gridContainer");

for (let i = 0; i < 256; i++) {
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    square.classList.add("square");
    gridContainer.insertAdjacentElement("beforeend", square);
}

