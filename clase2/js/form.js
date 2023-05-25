import { ProfileManager } from "./profileManager.js";

const profileManager = new ProfileManager("cardupdate");
const fileInput = document.querySelector("#file-input");

fileInput.addEventListener("change", (event) => {
  handleFileUpload(event.target.files[0]);
});

/**
 * @param {DragEvent} event
 */
function handleDragOver(event) {
  // Only allow files to be dropped here.
  if (!event.dataTransfer.types.includes("Files")) {
    return;
  }
  event.preventDefault();
  // Specify Drop Effect.
  event.dataTransfer.dropEffect = "copy";
}

/**
 * @param {DragEvent} event
 */
function handleDragEnter(event) {
  // Only allow files to be dropped here.
  if (!event.dataTransfer.types.includes("Files")) {
    return;
  }
  event.preventDefault();
}

/**
 * @param {DragEvent} event
 */
function handleDrop(event) {
  event.preventDefault();
  // Get the first item here since we only want one image
  const file = event.dataTransfer.files[0];
  // Check that file is an image.
  if (!file.type.startsWith("image/")) {
    alert("Only image files are allowed.");
    return;
  }

  handleFileUpload(file);
}

/**
 * @param {File} file
 */
function handleFileUpload(file) {
  const fileReader = new FileReader();

  fileReader.addEventListener("load", (event) => {
    // Dispatch an event to the profile card containing the updated profile.
    profileManager.publish({
      image: event.target.result,
    });
  });

  fileReader.readAsDataURL(file);
}

export { handleDragOver, handleDragEnter, handleDrop, handleFileUpload };
