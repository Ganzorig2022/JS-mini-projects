const main = document.getElementById("main");
const addUserBtn = document.getElementById("add-user");
const doubleBtn = document.getElementById("double");
const showMillionaires = document.getElementById("show-millionaires");
const sortBtn = document.getElementById("sort");
const calculateWealthBtn = document.getElementById("calculate-wealth");

let data = [];

// fetch random user and add money.   JSON stands for JavaScript Object Notation
getRandomUser();

async function getRandomUser() {
  const res = await fetch("https://randomuser.me/api");
  const data = await res.json(); //data {} butsna.

  // random-oor hereglegchdiin medeelel tataj awna. Ternii results [] array-iin [0] dr {gender: 'female', name: {…}} geh met object{} bn.

  const user = data.results[0];

  // user-iin name {} object dotor first gesen property.
  const newUser = {
    name: `${user.name.first} ${user.name.last}`,
    money: Math.floor(Math.random() * 1000000),
  };

  addData(newUser);
}

// Add newUser object-iig data[] gesen array luu push-lene.
function addData(obj) {
  data.push(obj);
  updateDOM();
}

// (...) spread operator ni neg array[]-aas oor array[]-luu elementuudiig huuldag.
function doubleMoney() {
  data = data.map((user) => {
    return { ...user, money: user.money * 2 };
  });
  updateDOM();
}

// sort by richest
function sortByRichest() {
  data.sort((a, b) => b.money - a.money);
  updateDOM();
}

// filter only millionaires
function showMillionairesData() {
  data = data.filter((user) => user.money > 1000000);
  updateDOM();
}

// Niit horongonii hemjeeg nemeed gargah function
function calculateWealth() {
  const wealth = data.reduce((acc, user) => (acc += user.money), 0);
  const wealthEl = document.createElement("div");
  wealthEl.innerHTML = `<h3>Total wealth: <strong>${formatMoney(
    wealth
  )}</strong></h3>`;

  main.appendChild(wealthEl);
}

// update DOM
function updateDOM(providedData = data) {
  // clear main div

  main.innerHTML = "<h2><strong>Person</strong> Wealth</h2>";
  providedData.forEach((item) => {
    const element = document.createElement("div");
    element.classList.add("person");
    element.innerHTML = `<strong>${item.name}</strong>${formatMoney(
      item.money
    )}`;
    main.appendChild(element);
  });
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
  return "$" + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

// Event Listeners
addUserBtn.addEventListener("click", getRandomUser);
doubleBtn.addEventListener("click", doubleMoney);
sortBtn.addEventListener("click", sortByRichest);
showMillionaires.addEventListener("click", showMillionairesData);
calculateWealthBtn.addEventListener("click", calculateWealth);
