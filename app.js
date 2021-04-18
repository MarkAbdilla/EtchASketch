const gridContainer = document.querySelector('.container');
const gridButton = document.getElementById('btn');

let gridColour = (min, max) => min + Math.floor(Math.random() * (max - min + 1));

window.addEventListener('load', DefaultGrid);

gridButton.addEventListener('click', changeGridSize);

function DefaultGrid()
{
    setGridSize(16);
    fillGrid(16);
}

function setGridSize(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
}

function fillGrid(size) {
    for (i = 0; i < size * size; i++) {
        const div = document.createElement('div');
        div.className = 'grid-box';
        div.addEventListener('mouseover', changeColour);
        gridContainer.appendChild(div);
    }
}

function changeGridSize()
{
    let newSize = prompt("Choose the new size of your grid: ", "Please enter a number");
    if (newSize !== null)
    {
        newSize = parseInt(newSize);
        if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
            alert("Enter a number from 1 - 64 range");
            changeGridSize();
        }
        else {
            clearGrid();
            setGridSize(newSize);
            fillGrid(newSize);
        }
    }
}

function clearGrid() {
    const gridArray = Array.from(gridContainer.childNodes);
    gridArray.forEach((element) => {
      gridContainer.removeChild(element);
    });
  }

function changeColour(e)
{
    let r = gridColour(0, 255);
    let g = gridColour(0, 255);
    let b = gridColour(0, 255);
    let rgb = `rgb(${r}, ${g}, ${b})`;
    e.target.style.backgroundColor = rgb;
}
