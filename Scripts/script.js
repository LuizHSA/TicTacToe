
const game = document.querySelector(".game");
let board = ["","","","","","","","","",]
const symbols = ["X","O"];
let zeroAndOne = 0

changeIndex = ()=>{
    zeroAndOne = zeroAndOne === 0 ? 1 : 0
}



makeAplay = (squareNumber)=>{
    if(board[squareNumber]==""){
        squareSelected = document.querySelector(`.square-${squareNumber}`)
        board[squareNumber] = symbols[zeroAndOne]
        squareSelected.innerHTML = board[squareNumber]
        changeIndex()

    }
}

createBoard = ()=>{

    for(let i = 0; i < 9; i++){
        game.innerHTML +=  `<div onclick="makeAplay(${i})" class="square square-${i}">${board[i]}</div>`
    }

}

const winSequences = [
    []
]
