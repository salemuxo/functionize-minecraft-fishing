// Functionize Minecraft Fishing Start Code

// Variables to store HTML Elements
let fishBtn = document.getElementById("fish-btn");
let charSelect = document.getElementById("character-select");
let resultImg = document.getElementById("result-img");
let numCodSpan = document.getElementById("num-cod");
let numSalmonSpan = document.getElementById("num-salmon");
let numTropicalSpan = document.getElementById("num-tropical");
let numPufferSpan = document.getElementById("num-puffer");

// Global Variables
let numCod = 0;
let numSalmon = 0;
let numTropical = 0;
let numPuffer = 0;

// Add Event Listener to Calculate Button
fishBtn.addEventListener("click", fishBtnClicked);

// Event handler for fishBtn
function fishBtnClicked() {
  // Check Selected Character
  let character = charSelect.value;

  // change probability depending on character
  if (character === "steve") {
    // steve: cod 70%, salmon 20%, tropical 5%, puffer 5%
    catchFish("70", "20", "5");
  } else if (character === "alex") {
    // alex: cod 10%, salmon 10%, tropical 30%, puffer 50%
    catchFish("10", "10", "30");
  } else if (character === "villager") {
    // villager: cod 25%, salmon 25%, tropical 25%, puffer 25%
    catchFish("25", "25", "25");
  }
}

// catch fish function
function catchFish(codChance, salmonChance, tropicalChance) {
  // convert percent to decimal
  codChance /= 100;
  salmonChance /= 100;
  tropicalChance /= 100;

  let randNum = Math.random();
  if (randNum < codChance) {
    numCod++;
    numCodSpan.innerHTML = numCod;
    resultImg.src = "img/Raw-Cod.png";
  } else if (randNum < codChance + salmonChance) {
    numSalmon++;
    numSalmonSpan.innerHTML = numSalmon;
    resultImg.src = "img/Raw-Salmon.png";
  } else if (randNum < codChance + salmonChance + tropicalChance) {
    numTropical++;
    numTropicalSpan.innerHTML = numTropical;
    resultImg.src = "img/Tropical-Fish.png";
  } else {
    numPuffer++;
    numPufferSpan.innerHTML = numPuffer;
    resultImg.src = "img/Pufferfish.png";
  }
}
