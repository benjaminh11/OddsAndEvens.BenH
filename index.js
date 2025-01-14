// TODO: this file! :)
const numInput = document.querySelector("#number");
const form = document.querySelector("form");
const bankNum = document.querySelector("#bankNum");

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
    render;
    numInput.value = "";
  }
});

console.log(state);
//render

//render numbers in number bank

//render evens

//render odds

function renderBank() {
  bankNum.innerText = "";
  state.bank.map((number) => {
    const li = document.createElement("li");
    li.innerText = number;
    bankNum.appendChild(li);
  });

  //   const numberBank = document.querySelector("output");
  //   numberBank.replaceChildren(...bankNum);
}

function render() {
  renderBank();
}
