
const game = document.querySelector(".game");
const playerScoreX = document.querySelector(".player-pointsX");
const playerScoreO = document.querySelector(".player-pointsO");
const gameOverScreen = document.querySelector(".game-over")
const winnerText = document.querySelector(".winner-text")
const symbols = ["X","O"];
let board = ["","","","","","","","","",];
let zeroAndOne = 0;
let Xpoints = 0;
let Opoints = 0;
let playCounter = 0

changeIndex = ()=>{
    zeroAndOne = zeroAndOne === 0 ? 1 : 0
}



makeAplay = (squareNumber)=>{

    if(board[squareNumber]==""){
        board[squareNumber] = symbols[zeroAndOne]
        AttBoard()
        changeIndex()
        playCounter++
        winSequences()
        

    }
}

AttBoard = ()=>{
    game.innerHTML = ""
    for(let i = 0; i < 9; i++){
        game.innerHTML +=  `<div onclick="makeAplay(${i})" class="square square-${i}">${board[i]}</div>`
        playerScoreX.innerHTML = `${Xpoints} points`
        playerScoreO.innerHTML = `${Opoints} points`
    }

}

isWin = ()=>{
    
    changeIndex()
    gameOverScreen.style.display = "flex"
    winnerText.innerHTML = `O Jogador ${symbols[zeroAndOne]} venceu a partida! `
    if(zeroAndOne == 0){
        Xpoints++
    }else{
        Opoints++
    }

    board = ["","","","","","","","","",]
    playCounter = 0
    AttBoard()
    changeIndex()
    
}

isDraw = ()=>{
    playCounter = 0
    gameOverScreen.style.display = "flex"
    winnerText.innerHTML = "Deu velha"
    board = ["","","","","","","","","",]
    AttBoard()
    
}

winSequences =()=>{
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
        isWin()
    }
    else if (playCounter == 9){
        isDraw()
    }
}

playAgain = ()=>{
    gameOverScreen.style.display = "none"
}
