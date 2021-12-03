
const board = document.querySelector(".board");



createBoard = ()=>{

    for(let i = 0; i < 9; i++){
        board.innerHTML +=  `<div class="square ${i}">${i}</div>`
    }

}

