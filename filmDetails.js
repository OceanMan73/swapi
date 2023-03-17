const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filmID = urlParams.get('film')
console.log(filmID);

const GetFilmDetail = async () => {
     const film =  await fetch(`https://swapi.dev/api/films/${filmID}`, {
        method: 'GET'
    })
     return await film.json();
}
    fetch(`https://swapi.dev/api/films/${filmID}`)
    .then(response => response.json())
    .then(data => {
     const ul = document.querySelector("#sampleID");
     const li = document.createElement("li");
     const link = document.createElement("a");
     ul?.append(li);
     li.append(link);
     const title = data.characters;
     link.textContent = title;
     document.body.appendChild(link);
    });
