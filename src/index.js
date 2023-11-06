import { Game } from "./constructor/Game";
import { Human } from "./constructor/Race/Human";
import { Orc } from "./constructor/Race/Orc";
import dragons from "./constructor/Dragons";
import { relationships } from "./constructor/relationships";
import { forces } from "./constructor/relationships";

const player1 = new Human("Aragorn");
const player2 = new Orc("Azog");

const game = new Game();
game.addPlayer(player1);
game.addPlayer(player2);
game.initGame();
game.startGame();

game.endGame();

player1.attack(player2);

player2.heal(10);

console.log("relationships : ", relationships);

function calculateAverage(notes) {
  return (notes.reduce((acc, note) => acc + note, 0) / notes.length).toFixed(2);
}

function displayDragons(dragons) {
  const dragonList = [];

  dragons.names.forEach((dragon) => {
    dragonList.push(dragon);
  });

  const dragonName = document.querySelector(".dragon-name");

  const dragonListArray = dragonList.map((dragon) => {
    let dragonsRelations =
      relationships.find((rel) => rel.id === dragon.id)?.relations || [];
    dragonsRelations = dragonsRelations
      .filter((id) => id !== dragon.id)
      .map((id) => {
        return dragons.names.find((d) => d.id === id)?.name;
      })
      .join(", ");

    const elementInfo = dragon.element ? `, element: ${dragon.element}` : "";

    const dragonForces = forces.find((f) => f.id === dragon.id)?.notes || [];
    const averageForce = calculateAverage(dragonForces);

    return (
      "<li>" +
      dragon.name +
      elementInfo +
      ", relations : " +
      dragonsRelations +
      `, force moyenne : ${averageForce}` +
      "</li>"
    );
  });
  dragonName.innerHTML = dragonListArray.join(" ");
}

displayDragons(dragons);

function displayDragonsNumber() {
  console.log("dragons.number : ", dragons.count);

  const dragonNumber = document.querySelector(".dragons-number");
  dragonNumber.innerHTML = dragons.count;
}

displayDragonsNumber();

function displayCharacterName(character, elementId) {
  const characterElement = document.getElementById(elementId);
  const name = characterElement.querySelector(".name");
  const health = characterElement.querySelector(".health");
  const strength = characterElement.querySelector(".strength");

  name.textContent = character.name;
  health.textContent = character.health;
  strength.textContent = character.strength;
}

document.getElementById("attackButton").addEventListener("click", function () {
  player1.attack(player2);
  displayCharacterName(player1, "characterName1");
  displayCharacterName(player2, "characterName2");
});

displayCharacterName(player1, "characterName1");
displayCharacterName(player2, "characterName2");

player1.attack(player2);
