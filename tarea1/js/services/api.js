const apiURL = 'https://icanhazdadjoke.com/';

function getAPI(url) {
  return fetch(url, {
    headers: {
      'Accept': 'application/json'
    }
  })
  .then(response => {
    if (!response.ok) {
      throw new Error(`¡Error HTTP! Estado: ${response.status}`);
    }

    return response.json();
  })
  .catch(error => {
    console.error(error);
  });
};

function getRandomJoke() {
  return getAPI(apiURL)
    .then(data => {
      return data.joke;
    })
    .catch(error => {
      console.error(error);
    });
};

function getJokeByTerm(searchInput) {
  const apiUrl = `${apiURL}search?term=` + encodeURIComponent(searchInput);

  return getAPI(apiUrl)
    .then(data => data.results)
    .catch(error => console.log(error));
};

export { getRandomJoke, getJokeByTerm };