// loosely inspired https://github.com/jameesjohn/custom-event-demo
import { ProfileManager } from "./js/profileManager.js";
import { handleDragOver, handleDragEnter, handleDrop } from "./js/form.js";
import { handleCardUpdate } from "./js/card.js";

const profileManager = new ProfileManager("cardupdate");

const section = document.querySelector(".form section");
const nameInput = document.querySelector("#name");
const occupationInput = document.querySelector("#occupation");

section.addEventListener("dragover", handleDragOver);
section.addEventListener("dragenter", handleDragEnter);
section.addEventListener("drop", handleDrop);

profileManager.subscribe(handleCardUpdate);

console.log(profileManager);
occupationInput.addEventListener("change", (event) => {
  profileManager.publish({
    occupation: event.target.value,
  });
});

nameInput.addEventListener("change", (event) => {
  profileManager.publish({
    name: event.target.value,
  });
});
