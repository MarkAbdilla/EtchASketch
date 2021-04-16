let gridContainer = document.querySelector('.container');
let gridCount = 16;

for (i = 1; i <= gridCount; i++) {
    document.addEventListener('DOMContentLoaded', function(){
        let div = document.createElement('div');
        div.className = 'grid-box';
        div.addEventListener('mouseover', changeColour);
        div.addEventListener('mouseout', revertColour);
        gridContainer.appendChild(div);
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

