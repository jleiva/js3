import { getJokeByTerm } from '../services/api.js';

function searchJoke(event) {
  event.preventDefault();

  const searchInput = document.getElementById('search').value;

  if (!searchInput) {
    return;
  }

  return getJokeByTerm(searchInput).then(results => displayJokes(results));
}

function displayJokes(jokes) {
  const resultContainer = document.getElementById('jokesGenerator');
  resultContainer.innerHTML = '';

  if (jokes.length === 0) {
    resultContainer.innerHTML = 'No se encontraron chistes';
    return;
  }

  jokes.forEach(joke => {
    const jokeElement = document.createElement('p');
    jokeElement.textContent = joke.joke; 
    resultContainer.appendChild(jokeElement);
  });
}

export { searchJoke }