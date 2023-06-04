import { Publisher } from "../publisher/Publisher.js";
import { getRandomJoke } from "../services/api.js";

const jokeChange = new Publisher('joke.change');

async function renderRandomJoke() {
  const data = await getRandomJoke();
  const { joke } = data;
  const randomJokeElement = document.getElementById('randomJoke');

  randomJokeElement.textContent = joke;
  jokeChange.publish(joke);
}

const initRandomJokeComponent = () => {
  const aleatoriBtn = document.getElementById('aleatoriBtn');

  aleatoriBtn.addEventListener('click',  renderRandomJoke);
}

export { jokeChange, initRandomJokeComponent }