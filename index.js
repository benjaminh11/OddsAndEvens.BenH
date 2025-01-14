// TODO: this file! :)
const numInput = document.querySelector("#number");
const form = document.querySelector("form");
const bankNum = document.querySelector("#bankNum");
const sortOneBtn = document.querySelector("#sortOne");
const sortAllBtn = document.querySelector("#sortAll");
const evenNum = document.querySelector("#evenNum");
const oddNum = document.querySelector("#oddNum");
const evensOutput = document.querySelector("#evens output");

//make an object reprenting state
const state = {
  bank: [],
  evens: [],
  odds: [],
};

//add numbers to the bank
form.addEventListener("submit", function (e) {
  e.preventDefault();
  const numToAdd = parseInt(numInput.value);

  if (!isNaN(numToAdd) && numToAdd > 0) {
    // Push the number into the existing banks
    state.bank.push(numToAdd);
    render();
    numInput.value = "";
  }
});

console.log(state);
//render

//render numbers in number bank
function renderBank() {
  bankNum.innerText = "";
  state.bank.map((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    bankNum.appendChild(li);
  });
}

//render evens
function renderEvens() {
  evenNum.innerText = "";
  state.evens.map((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    evenNum.appendChild(li);
  });
}

//render odds
function renderOdds() {
  oddNum.innerText = "";
  state.odds.map((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    oddNum.appendChild(li);
  });
}

//handle button click events

//sort one button
sortOneBtn.addEventListener("click", function () {
  if (state.bank.length > 0) {
    const firstNumber = state.bank[0];
    if (firstNumber % 2 === 0) {
      state.evens.push(firstNumber);
    } else {
      state.odds.push(firstNumber);
    }
    state.bank.shift();
    render();
  }
});

//sort allbutton
sortAllBtn.addEventListener("click", function () {
  // Loop through all numbers in the bank
  state.bank.forEach((number) => {
    if (number % 2 === 0) {
      state.evens.push(number);
    } else {
      state.odds.push(number);
    }
  });
  //after we sort, clear bank
  state.bank = [];

  render();
});
function render() {
  renderBank();
  renderEvens();
  renderOdds();
}
