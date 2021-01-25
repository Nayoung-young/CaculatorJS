// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const numBtnAll = document.querySelectorAll(".number"),
  opBtnAll = document.querySelectorAll(".op"),
  canBtn = document.querySelector(".can"),
  eqBtn = document.querySelector(".equ"),
  inputBtn = document.querySelector("input");

let equation = "";

let opClick = false,
  opClickNum = 0,
  opNext = false;
function opBtnHandler(event) {
  if (opClick) {
    //console.log("op ON!");
    const clickedOp = event.target.innerText;
    equation += clickedOp;
    console.log("op clicked", equation);
  }
  opClick = false;
  opClickNum += 1;
  opNext = true;
}

let eqClick = false;
function eqHandler() {
  console.log("eq clicked", equation);
  if (eqClick) {
    const resultVal = eval(equation);
    inputBtn.value = resultVal;
  }
  eqClick = false;
  opClickNum = 0;
  opClick = true;

  addEventListenerList(opBtnAll, "click", opBtnHandler);
}

function Reset() {
  opClickNum = 0;
  opClick = false;
  opNext = false;
  eqClick = false;
}

function cancelHandler() {
  inputBtn.value = "0";
  Reset();
  equation = "";
}

function numBtnHandler(event) {
  const clickedNum = event.target.innerText; //string
  //currentNum += clickedNum;
  if (inputBtn.value === "0" || opNext) {
    inputBtn.value = clickedNum;
    opNext = false;
  } else {
    inputBtn.value += clickedNum;
  }

  equation += clickedNum;
  console.log("num clicked", equation);

  opClick = true;
  if (opClickNum >= 1) {
    eqClick = true;
  }

  addEventListenerList(opBtnAll, "click", opBtnHandler);
  eqBtn.addEventListener("click", eqHandler);
}

function addEventListenerList(list, event, fn) {
  for (let i = 0, len = list.length; i < len; i++) {
    list[i].addEventListener(event, fn);
  }
}

function init() {
  addEventListenerList(numBtnAll, "click", numBtnHandler);
  canBtn.addEventListener("click", cancelHandler);
}

init();
