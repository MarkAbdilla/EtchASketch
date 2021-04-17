const gridContainer = document.querySelector('.container');
const gridButton = document.getElementById('btn');

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
        div.addEventListener('mouseout', revertColour);
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
    e.target.style.backgroundColor = "black";
}

function revertColour(e)
{
    e.target.style.backgroundColor = "white";
}

