const grid = document.querySelector("grid");
const blockWidth =100
const blockHeight =20

//create Block
class Block{
    
}

//draw block
function addBlock() {
  const block = document.createElement("div");
  block.classList.add("block");
  grid.style.left = "100px";
  grid.style.bottom = "50px";
  grid.appendChild(block);
}

addBlock()