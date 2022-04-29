document.addEventListener("DOMContentLoaded", () => {
  // card options

  const cardArray = [
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "fries",
      img: "images/fries.png",
    },
    {
      name: "cheeburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "cheeburger",
      img: "images/cheeseburger.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "hotdog",
      img: "images/hotdog.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "ice-cream",
      img: "images/ice-cream.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "milkshake",
      img: "images/milkshake.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
    {
      name: "pizza",
      img: "images/pizza.png",
    },
  ];
  const grid = document.querySelector(".grid");
  const resultDisplay = document.querySelector("#result");
  var cardChosen = [];
  var cardChosenId = [];
  var cardsWon = [];

  // talbaraa beldeh .grid class-tai DIV dotor <img src="images/blank.png" data-id="0"> gesen tag-uud shineer vvsgej ogow.
  function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
      var card = document.createElement("img");
      card.setAttribute("src", "images/blank.png");
      card.setAttribute("data-id", i);
      grid.appendChild(card);

      // img dr darahad flipCard() ajillana.
      card.addEventListener("click", flipCard);
    }
  }
  createBoard();

  // Zuragnuuda ergvvlj haruulahdaa random-oor bairshulaw.
  cardArray.sort(() => 0.5 - Math.random());

  function flipCard() {
    //cardArray-iin massivaas data-id-g gargaj awna.
    var cardId = this.getAttribute("data-id");
    console.log(cardArray[cardId].name);

    // cardChosen[] empty array luu
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);
    // console.log(cardId + " id");
    // console.log(cardChosen + " zurag");
    // console.log(cardChosenId + " chosen ID");

    this.setAttribute("src", cardArray[cardId].img);
    // 2 zurag ergvvlsnii daraa ijil esehiig shalgah checkForMatch() function ajillana.
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    if (cardChosen[0] === cardChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      cardsWon.push(cardChosen);
    } else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry try again!");
    }
    cardChosen = [];
    cardChosenId = [];
    resultDisplay.textCotent = cardsWon.length;
    if (cardsWon.length === cardArray.lenght / 2) {
      resultDisplay.textContent = "Congratulations! you found them all";
    }
  }
});
