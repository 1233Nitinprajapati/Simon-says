let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"]
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        started = true;
        console.log("game started");
        levelup();
    }
});


function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}

function userFlash(btn) {
    btn.classList.add("userflash");
    setTimeout(function () {
        btn.classList.remove("userflash");
    }, 250)
}

function levelup() {
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;


    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btns[randIdx];
    let randbtn = document.querySelector(`.${randColor}`);
    gameSeq.push(randColor);
    console.log(gameSeq);
    gameFlash(randbtn);
}
function checkAns(idx) {
    if (userSeq[idx] === gameSeq[idx]) {
        if (userSeq.length == gameSeq.length) {
            setTimeout(levelup, 1000)
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b> <br> Press any key`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function () {
            document.querySelector("body").style.backgroundColor = "white";
        }, 150);
        reset();
    }
}

function btnPress() {

    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress);
}
let h3 = document.querySelector("h3");
let highestlev = 0;

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
};



document.addEventListener("click", function () {
    
 if (highestlev<=level) {
    highestlev = level;
    console.log(highestlev);
    console.log(level);
 }
        h3.innerHTML = `Highest score <b>${highestlev}</b>`;
        console.log("highest score")
    
    })

/*let highestlev = 0; // Declare highestlev outside of the reset function

function reset() {
    started = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}

let h3 = document.querySelector("h3");
document.addEventListener("click", function () {
    if (highestlev <= level) {
        highestlev = level;
        console.log(highestlev);
        console.log(level);
    }
    h3.innerHTML = `Highest score <b>${highestlev}</b>`;
    console.log("highest score")
}); */
