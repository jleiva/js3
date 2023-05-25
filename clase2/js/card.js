const profileCard = document.querySelector(".profile-card");

/**
 * @param {CustomEvent} event
 */
function handleCardUpdate(event) {
  const { image, name, occupation } = event.detail;

  if (image) {
    profileCard.querySelector("img").src = image;
  }
  if (name) {
    profileCard.querySelector("span.name").textContent = name;
  }
  if (occupation) {
    profileCard.querySelector("span.occupation").textContent = occupation;
  }
}

export { handleCardUpdate };
