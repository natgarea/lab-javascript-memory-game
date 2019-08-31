const cards = [
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" },
  { name: "aquaman", img: "aquaman.jpg" },
  { name: "batman", img: "batman.jpg" },
  { name: "captain america", img: "captain-america.jpg" },
  { name: "fantastic four", img: "fantastic-four.jpg" },
  { name: "flash", img: "flash.jpg" },
  { name: "green arrow", img: "green-arrow.jpg" },
  { name: "green lantern", img: "green-lantern.jpg" },
  { name: "ironman", img: "ironman.jpg" },
  { name: "spiderman", img: "spiderman.jpg" },
  { name: "superman", img: "superman.jpg" },
  { name: "the avengers", img: "the-avengers.jpg" },
  { name: "thor", img: "thor.jpg" }
];

let memoryGame = new MemoryGame(cards);
let pairsClickedDOMEl = document.getElementById("pairs_clicked");
let pairsGuessedDOMEl = document.getElementById("pairs_guessed");
let choice1 = null;
let choice2 = null;

memoryGame.shuffleCards(cards);

document.addEventListener("DOMContentLoaded", function(event) {
  let html = "";
  memoryGame.cards.forEach(pic => {
    html += `<div class="card" data-card-name="${pic.name}">`;
    html += `<div class="back" name="${pic.img}"></div>`;
    html += `<div class="front" style="background: url(img/${pic.img}) no-repeat"></div>`;
    html += `</div>`;
  });

  // Add all the divs to the HTML
  document.querySelector("#memory_board").innerHTML = html;

  // Bind the click event of each element to a function
  document.querySelectorAll(".back").forEach(card => {
    card.onclick = function() {
      // flip user selection
      flipCard(card.parentElement);

      // save user choices
      if (choice1 == null) {
        choice1 = card.parentElement;
      } else {
        choice2 = card.parentElement;

        value1 = choice1.getAttribute("data-card-name");
        value2 = choice2.getAttribute("data-card-name");

        if (!memoryGame.checkIfPair(value1, value2)) {
          // user failed to select a pair, flip cards back
          setTimeout(() => {
            flipCard(choice1);
            flipCard(choice2);
            resetChoices();
            alert("Bad luck, try again!");
          }, 10);
          
        } else {
          if (memoryGame.isFinished()) {
            setTimeout(() => {
              alert("Game has finished!");}, 10);
          }
          resetChoices();
        }
        
        pairsClickedDOMEl.innerHTML = memoryGame.pairsClicked;
        pairsGuessedDOMEl.innerHTML = memoryGame.pairsGuessed;

      }
    };
  });
});

function flipCard(card) {
  card.querySelector(".front").classList.replace("front", "temp");
  card.querySelector(".back").classList.replace("back", "front");
  card.querySelector(".temp").classList.replace("temp", "back");
}

function resetChoices(){
  choice1 = null;
  choice2 = null;
}