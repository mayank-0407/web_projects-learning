console.log("tic tac toe")
let turn = "X"
let gameover = false

//change turn on ervy click
const changeturn = () => {
    return turn === "X" ? "0" : "X"
}

//if anyone is winner
const checkwinner = () => {
        let boxtext = document.getElementsByClassName('boxtext');
        let winn = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [1, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ]
        winn.forEach(e => {
            if ((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")) {
                console.log(document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won")
                gameover = true;
                alert('gameover')
                document.querySelector('.info').innerText = boxtext[e[0]].innerText + " Won";
            }
        })

    }
    // main code
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element => {
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', () => {
        if (boxtext.innerText === '' && gameover === false) {
            boxtext.innerText = turn;
            turn = changeturn();
            checkwinner();
            if (!gameover)
                document.getElementsByClassName("info")[0].innerText = "Turn For " + turn;
        }
    })
})

//reset button
reset.addEventListener('click', () => {
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element => {
        element.innerText = ""
    });
    turn = "X";
    gameover = false;
    document.getElementsByClassName("info")[0].innerText = "Turn for " + turn;
})