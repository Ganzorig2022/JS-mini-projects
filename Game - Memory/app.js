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
    // gargaj awsan ID-gaa array-n hed deh element zurag-iig gedgiig olod cardChosen[] array luu hiine.
    cardChosen.push(cardArray[cardId].name);
    cardChosenId.push(cardId);

    // HMTL dotor vvssen src="blank.png" zurgiig shineer cardArray[] massiv dotor bga zuragnuudas songoj awch hiij ogno.
    this.setAttribute("src", cardArray[cardId].img);
    // 2 zurag ergvvlsnii daraa ijil esehiig shalgahdaa 0.5sec-iin daraa checkForMatch() function ajillana.
    if (cardChosen.length === 2) {
      setTimeout(checkForMatch, 500);
    }
  }
  // check for matches
  function checkForMatch() {
    var cards = document.querySelectorAll("img");
    const optionOneId = cardChosenId[0];
    const optionTwoId = cardChosenId[1];
    // Songoson 2 zuragnii NAME ni adilhan bwal tuhain bairand white zurag-aar solij ogoh.
    if (cardChosen[0] === cardChosen[1]) {
      alert("You found a match");
      cards[optionOneId].setAttribute("src", "images/white.png");
      cards[optionTwoId].setAttribute("src", "images/white.png");
      // songoson zow zuragnudig cardsWon[] array luu hiij ogno.
      cardsWon.push(cardChosen);
    }
    // Herwee bish bol tuhain bairand blank zurag-aar solij ogoh.
    else {
      cards[optionOneId].setAttribute("src", "images/blank.png");
      cards[optionTwoId].setAttribute("src", "images/blank.png");
      alert("Sorry try again!");
    }
    // Songoson zurag, ID-nii array[]-g ergeed hooson bolgono.
    cardChosen = [];
    cardChosenId = [];

    // HTML dotorh #result id-tai DIV dotor Score: gesen text-iin ard zow taasan zuragnuud niit LENGTH-tei tentsvv gej ogow.
    resultDisplay.textCotent = cardsWon.length;
    // 2, 2-oor ni zow taasnii daraa niit 12shirheg zuragnii urt-iin taltai ni zow taasan zuragnii LENGTH ni tentsvv bwal HOJSON gesen vg.
    if (cardsWon.length === cardArray.lenght / 2) {
      resultDisplay.textContent = "Congratulations! you found them all";
    }
  }
});
