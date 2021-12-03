
const game = document.querySelector(".game");
const body = document.querySelector("body")
let board = ["","","","","","","","","",]
const symbols = ["X","O"];
let zeroAndOne = 0

changeIndex = ()=>{
    zeroAndOne = zeroAndOne === 0 ? 1 : 0
}



makeAplay = (squareNumber)=>{

    if(board[squareNumber]==""){
        board[squareNumber] = symbols[zeroAndOne]
        AttBoard()
        changeIndex()
        IsAWin()
    }
}

AttBoard = ()=>{
    game.innerHTML = ""
    for(let i = 0; i < 9; i++){
        game.innerHTML +=  `<div onclick="makeAplay(${i})" class="square square-${i}">${board[i]}</div>`
    }

}

IsAWin =()=>{
    if(
        (board[0] == board[1] && board[0] == board[2]) && !(board[0] =="" ) ||
        (board[3] == board[4] && board[3] == board[5]) && !(board[3] =="" ) ||
        (board[6] == board[7] && board[6] == board[8]) && !(board[6] =="" ) ||
        (board[0] == board[3] && board[0] == board[6]) && !(board[0] =="" ) ||
        (board[1] == board[7] && board[1] == board[4]) && !(board[1] =="" ) ||
        (board[2] == board[5] && board[2] == board[8]) && !(board[2] =="" ) ||
        (board[0] == board[4] && board[0] == board[8]) && !(board[0] =="" ) ||
        (board[2] == board[4] && board[6] == board[2]) && !(board[2] =="" ) 

    ){
        body.style.backgroundColor = "red"
    }
    
}
