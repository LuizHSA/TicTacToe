
const game = document.querySelector(".game");
const playerScoreX = document.querySelector(".player-pointsX");
const playerScoreO = document.querySelector(".player-pointsO");
const gameOverScreen = document.querySelector(".game-over")
const symbols = ["X","O"];
let board = ["","","","","","","","","",];
let zeroAndOne = 0;
let Xpoints = 0;
let Opoints = 0;

changeIndex = ()=>{
    zeroAndOne = zeroAndOne === 0 ? 1 : 0
}



makeAplay = (squareNumber)=>{

    if(board[squareNumber]==""){
        board[squareNumber] = symbols[zeroAndOne]
        AttBoard()
        changeIndex()
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
    const winnerText = document.querySelector(".winner-text")
    winnerText.innerHTML = `O Jogador ${symbols[zeroAndOne]} venceu a partida! `
    
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
        changeIndex()
        gameOverScreen.style.display = "flex"
        const winnerText = document.querySelector(".winner-text")
        winnerText.innerHTML = `O Jogador ${symbols[zeroAndOne]} venceu a partida! `
        Xpoints++
        Opoints++
    }
    
}
