function createCell(width , height){
    let board = document.querySelector('#board')
    let div = document.createElement('div');
    div.innerHTML = '0';
    div.classList.add('cell');
    div.style.width = width + 'px';
    div.style.height = height + 'px';
    board.appendChild(div);
}



function addCells(w , h){
    let board = document.querySelector('#board')
    board.style.width = w + 'px';
    let maximumCellsInBoard = (w / 100) * (h / 100);
    for(i = 0 ; i < maximumCellsInBoard ; i++){
         createCell(100 , 100);
    }
}

let startButton = document.querySelector('#start');

startButton.addEventListener('click', function() {
	addCells(500 , 500);
});

function addCounter(){
var cells = document.querySelectorAll('div.cell')
for(var i = 0; i < cells.length; i++) {
    cells[i].addEventListener("click", function (){});
}
}