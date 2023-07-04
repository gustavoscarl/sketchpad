const container = document.querySelector('.mainContainer')
let counter = 0;
let counterDo = 0;
let gridSize = 16;

// Button for newGrid

const button = document.querySelector('#newGrid')

button.addEventListener('click', function (){
  gridSection.forEach(function (item) {
    removeCells()
  });
  counter++;
  gridSize = window.prompt('Escolha o tamanho do seu grid (máximo: 100)', 0 );
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
    container.style.gridTemplateRows = `repeat(${gridSize - 1}, ${gridWidth}px)  1fr 1fr`;
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
    addColorBlack();
};

// Add color to existing grid sections
const optionDark = document.querySelector('.option-btn')
const rgbOption = document.querySelector('#rgb')
const clearOption = document.querySelector('#clear')

clearOption.addEventListener('click', function (){
    clearGrid();
});

optionDark.addEventListener('click', function (){
    addColorBlack();
});

rgbOption.addEventListener('click', function (){
    addColorToSquares();
});


function addColorToSquares() {
  gridSection = document.querySelectorAll('.gridSection');
  gridSection.forEach(function (item) {  
    item.addEventListener('mouseover', function () {
      var randomColor = getRandomColor();
      item.style.backgroundColor = randomColor;
      });
    }); 
  };

function addColorBlack() {
  gridSection = document.querySelectorAll('.gridSection');
  gridSection.forEach(function (item) {  
    item.addEventListener('mouseover', function () {
      item.style.backgroundColor = '';
      item.classList.add('active');
    });
  });
};

function clearGrid() {
  gridSection = document.querySelectorAll('.gridSection');
  gridSection.forEach(function (item) {  
      item.style.backgroundColor = '';
      item.classList.remove('active');
    });
};


function getRandomColor() {
  var red = Math.floor(Math.random() * 256);
  var green = Math.floor(Math.random() * 256);
  var blue = Math.floor(Math.random() * 256);
  return "rgb(" + red + ", " + green + ", " + blue + ")";
}

createGrid();

