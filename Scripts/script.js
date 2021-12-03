
const board = document.querySelector(".board");
const symbols = ["X","O"];
let zeroAndOne = 0

changeIndex = ()=>{
    zeroAndOne = zeroAndOne === 0 ? 1 : 0
}

makeAplay = (squareNumber)=>{
    squareSelected = document.querySelector(`.square-${squareNumber}`);
    if(squareSelected.innerHTML ===""){
        changeIndex()
        squareSelected.innerHTML = symbols[zeroAndOne];
    }
}

createBoard = ()=>{

    for(let i = 0; i < 9; i++){
        board.innerHTML +=  `<div onclick="makeAplay(${i})" class="square square-${i}"></div>`
    }

}

const winSequences = [
    []
]
