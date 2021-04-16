let gridContainer = document.querySelector('.container');
let gridCount = 16;

for (i = 1; i <= gridCount; i++) {
    document.addEventListener('DOMContentLoaded', function(){
        let div = document.createElement('div');
        div.className = 'grid-box';
        gridContainer.appendChild(div);
    });
}
