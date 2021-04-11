let gridContainer = document.querySelector('.container');
let gridCount = 15;

for (i = 0; i <= gridCount; i++) {
    document.addEventListener('DOMContentLoaded', function(){
        let div = document.createElement('div');
        div.className = 'grid-box';
        div.innerHTML = 'test';
        gridContainer.appendChild(div);
    });
}
