const gameboard = {
    rowOne: ["X", "O", "O"],
    rowTwo: ["O", "X", "O"],
    rowThree: ["O", "O", "X"],
}

function checker(object){
    for(e in object) {
        console.log(`${object[e]}`);
    }
}

checker(gameboard);