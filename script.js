// change X to red , O to blue ;

let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let winMsg = document.querySelector(".win-msg");
let msg = document.querySelector(".msg");

let playerO = true;
let count = 0;

const win = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

const resetGame = () => {
    playerO = true;
    enablebtn();
    winMsg.classList.add("hide");
    count = 0;
}

const disablebtn = () => {
    for (let i of btn) {
        i.disabled = true;
    }
}

const enablebtn = () => {
    for (let i of btn) {
        i.disabled = false;
        i.innerText = "";
    }
}
const drawGame = () => {
    msg.innerText = "Game Draw";
    disablebtn();
    winMsg.classList.remove("hide");
}

btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (playerO == true) {
            box.style.color = "blue";
            box.innerText = "O";
            playerO = false;
            
        }
        else {
            box.style.color = "red";
            box.innerText = "X";
            playerO = true;
        }
        count++;
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let i of win) {
        let p1 = btn[i[0]].innerText;
        let p2 = btn[i[1]].innerText;
        let p3 = btn[i[2]].innerText;

        if (p1 !== "" && p2 !== "" && p3 !== "") {
            if (p1 === p2 && p2 === p3) {
                showWinner(p1);
                return true;
            }
            else if (count == 9) {
                drawGame();
            }
        }
    }
}

const showWinner = (p) => {
    msg.innerText = "Player " + p + " Wins !"
    disablebtn();
    winMsg.classList.remove("hide");
}

newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);