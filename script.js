let gameBoardDom = document.getElementById("gameboard");

const gameboard = {
    rowOne: ["", "", ""],
    rowTwo: ["", "", ""],
    rowThree: ["", "", ""],
};

let turn = false;

let checker = function(board){
    for(const row in board){
        board[row].forEach(cell =>{
            const markBox = () => {
                if(turn == false){
                    box.textContent = 'X'
                    turn = true;
                    box.removeEventListener('click', this);
                } else if (turn == true){
                    box.textContent = 'O'
                    turn = false;
                }
            box.removeEventListener('click', markBox);
            }
            let box = document.createElement('div')
            box.classList.toggle('block')
            box.addEventListener('click', markBox)
            gameBoardDom.appendChild(box);
        })
    }
}
checker(gameboard);