const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filmID = urlParams.get('film')
console.log(filmID);


    const film = fetch(`https://swapi.dev/api/films/${filmID}`, {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
    data.characters.forEach(characters => {

     const ul = document.querySelector("#list");
     const li = document.createElement("li");
     const btn = document.createElement("button");
    
     ul?.append(li)
     li.append(btn);
     const character = data.characters;
     btn.textContent = character;
     btn.addEventListener('click', function() {
        alert(`https://swapi.dev/api/people/${filmID}`);
})
      });





    })
             
