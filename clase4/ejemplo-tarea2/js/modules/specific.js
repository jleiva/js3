import { getJokeByTerm } from "../services/api.js";

const searchJoke = document.getElementById('searchJoke');
const jokeList = document.getElementById('jokeList');

async function renderJokesByTerm(event) {
  event.preventDefault();
  const searchTerm = searchJoke.value.trim();

  if (!searchTerm) {
    jokeList.innerHTML = 'Type something!!';
    return;
  }

  const data = await getJokeByTerm(searchTerm);

  if (data.results.length === 0) {
    jokeList.innerHTML = 'Dont exist this type of jokes';
  } else {
    const jokes = data.results.map((result) => ({
      id: result.id,
      text: result.joke,
    }));

    jokeList.innerHTML = '<ul>' + jokes.map(joke => `<li><a href="product.html?id=${joke.id}" id="${joke.id}">${joke.text}</a></li>`).join('') + '</ul>';
  }
}

const initSearch = () => {
  const specificBtn = document.getElementById('specificBtn');

  specificBtn.addEventListener('click', renderJokesByTerm);
}

export { initSearch };