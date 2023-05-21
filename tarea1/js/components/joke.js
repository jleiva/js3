import { getRandomJoke } from '../services/api.js';

const jokeText = document.getElementById('jokesGenerator');

function getJoke() {
  return getRandomJoke()
  .then(joke => {
    jokeText.textContent = joke;
  });
}

export { getJoke  }