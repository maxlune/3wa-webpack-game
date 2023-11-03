// import { Character } from "./constructor/Character";
// import { Game } from "./constructor/Game";
// import { Human } from "./constructor/Race/Human";
// import { Orc } from "./constructor/Race/Orc";
// import { Elf } from "./constructor/Race/Elf";
// import { Hobbit } from "./constructor/Race/Hobbit";

// // Exemple de création de personnage
// const player1 = new Human("Aragorn");
// const player2 = new Orc("Azog");

// const game = new Game();
// game.addPlayer(player1);
// game.addPlayer(player2);
// game.initGame();
// game.initiative();
// console.log("Players :", game.players);

// Exemple d'interaction
// player1.attack(player2);
// console.log(player1.health());
// player2.heal(10);

// console.log(player1.health);

// function displayCharacterName(character, elementId) {
//   const characterElement = document.getElementById(elementId);
//   const name = characterElement.querySelector(".name");
//   const health = characterElement.querySelector(".health");
//   const strength = characterElement.querySelector(".strength");

//   name.textContent = character.name;
//   health.textContent = character.health;
//   strength.textContent = character.strength;
// }

// document.getElementById("attackButton").addEventListener("click", function () {
//   player1.attack(player2);
//   displayCharacterName(player1, "characterName1");
//   displayCharacterName(player2, "characterName2");
//   // game.endGame();
// });

// displayCharacterName(player1, "characterName1");
// displayCharacterName(player2, "characterName2");

// player1.attack(player2);

// console.log(player2);

// document.addEventListener("DOMContentLoaded", () => {
//   const createCharacterButton = document.getElementById(
//     "createCharacterButton"
//   );
//   createCharacterButton.addEventListener("click", () => {
//     const nameInput = document.getElementById("characterNameInput").value;
//     const raceSelect = document.getElementById("characterRaceSelect").value;

//     let character;
//     switch (raceSelect) {
//       case "Human":
//         character = new Human(nameInput);
//         break;
//       case "Orc":
//         character = new Orc(nameInput);
//         break;
//       case "Elf":
//         character = new Elf(nameInput);
//         break;
//       case "Hobbit":
//         character = new Hobbit(nameInput);
//         break;
//       default:
//         console.error("Race non reconnue");
//         return;
//     }

//     document.querySelector("#characterName1 .name").textContent =
//       character.name;
//     document.querySelector("#characterName1 .health").textContent =
//       character.health;
//     document.querySelector("#characterName1 .strength").textContent =
//       character.strength;
//   });
// });

//////////////////////////

import { Human } from "./constructor/Race/Human";
import { Orc } from "./constructor/Race/Orc";
import { Elf } from "./constructor/Race/Elf";
import { Hobbit } from "./constructor/Race/Hobbit";

const game = new Game();

function displayCharacterDetails(character) {
  const characterDisplay = document.getElementById("characterDisplay");
  const nameElement = characterDisplay.querySelector(".name");
  const healthElement = characterDisplay.querySelector(".health");
  const strengthElement = characterDisplay.querySelector(".strength");

  nameElement.textContent = character.name;
  healthElement.textContent = `Vie: ${character.health}`;
  strengthElement.textContent = `Force: ${character.strength}`;
}

function createCharacter(name, race) {
  switch (race) {
    case "Human":
      return new Human(name);
    case "Orc":
      return new Orc(name);
    case "Elf":
      return new Elf(name);
    case "Hobbit":
      return new Hobbit(name);
    default:
      console.error("Race non spécifiée ou inconnue.");
      return null;
  }
}

function handleCharacterCreation(event) {
  event.preventDefault();

  let name, race;
  if (event.target.id === "createCharacterForm1") {
    name = document.getElementById("characterNameInput1").value.trim();
    race = document.getElementById("characterRaceSelect1").value;
  } else {
    name = document.getElementById("characterNameInput2").value.trim();
    race = document.getElementById("characterRaceSelect2").value;
  }

  if (name && race) {
    const character = createCharacter(name, race);
    game.addPlayer(character);
    displayCharacterDetails(character);
  } else {
    alert("Veuillez entrer un nom et sélectionner une race.");
  }
}

document
  .getElementById("createCharacterForm1")
  .addEventListener("submit", handleCharacterCreation);
document
  .getElementById("createCharacterForm2")
  .addEventListener("submit", handleCharacterCreation);
