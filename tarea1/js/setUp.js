import { getJoke } from './components/joke.js';
import { searchJoke } from './components/search.js';

const init = () => {
  const btnJoke = document.getElementById('randomJoke');
  const btnSearch = document.getElementById('btn-search');

  btnJoke.addEventListener('click', () => {
    getJoke();
  });

  btnSearch.addEventListener('click', (event) => {
    searchJoke(event);
  });
};

export default init;