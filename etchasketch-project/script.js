const container = document.querySelector(".container");

function firstGrid(){
  for (x=0; x < 256; x++){
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    square.addEventListener('mouseover',  e => e.target.classList.add('newColor'))
    }
}

function newGrid(){
const button = document.getElementById("gridButton")
  button.addEventListener('click', () => {
    const text = prompt("Select your grid size: ");
    alert(text);

    let num = Number(text);
    const width = (100 / num) + '%';

    const containerOne = document.getElementById("containerOne");
    containerOne.innerHTML = "";


    if (num > 0){
      for (let x=0; x < Math.pow(num, 2); x++){
      const square = document.createElement("div");
      square.className = "square";
      square.style.width = width;
      container.appendChild(square);
      square.addEventListener('mouseover',  e => e.target.classList.add('newColor'))
      } 
    }  
  });
}

function main(){
  firstGrid();
  newGrid()
}

main();