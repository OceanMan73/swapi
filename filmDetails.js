const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filmId = urlParams.get('film')
console.log(filmId);

const GetFilmDetail = async () => {
     const film =  fetch(`https://swapi.dev/api/film/${filmId}`, {
        method: 'GET'
    })
     const characters = await film.json();
     return characters;
}
    GetFilmDetail().then(characters => {

    const ul = document.querySelector("#sampleID");
    const li = document.createElement("li");
    ul?.append(li);
    li.textContent = characters;

    })
   