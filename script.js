const container = document.querySelector('.mainContainer')
let counter = 0;
let counterDo = 0;
let gridSize = 16;

  for (let i = 0; i <= 255; i++ ) {
    const div = document.createElement('div')
    div.classList.add('gridSection')
    container.appendChild(div)
  };








// Button for newGrid

const button = document.querySelector('#newGrid')

button.addEventListener('click', function (){
  gridSection.forEach(function (item) {
    removeCells()
  });
  counter++;
  gridSize = window.prompt('Escolha o tamanho do seu grid (máximo: 100', 0 );
  createGrid();
})

function removeCells() {
  while(container.firstChild) {
    container.removeChild(container.firstChild);
  }
}


function createGrid () {
    let gridWidth = container.offsetWidth / gridSize;
    container.style.gridTemplateColumns = `repeat(${gridSize}, ${gridWidth}px) 1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize - 1}, ${gridWidth}px)  1fr 1fr 1fr`;
  if (gridSize < 4) {
    container.style.gridTemplateColumns = `repeat(${gridSize},1fr`;
    container.style.gridTemplateRows = `repeat(${gridSize}, 1fr`;
  }
  for (let i = 0; i < gridSize ** 2; i++) {
    const square = document.createElement('div');
    square.classList.add('gridSection');
    container.appendChild(square); 
  }
  gridSection = document.querySelectorAll('.gridSection');
  addColorToSquares();
};

// Add color to existing grid sections

function addColorToSquares() {
  gridSection.forEach(function (item) {
    item.addEventListener('mouseover', function () {
      item.classList.add('active');
    });
  });
}

createGrid();

