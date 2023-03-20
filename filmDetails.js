const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const filmID = urlParams.get('film')
    console.log(filmID);

        const film = fetch(`https://swapi.dev/api/films/${filmID}`, {
            method: 'GET'
    })
    .then(film => film.json())
    .then(data => {
    data.characters.forEach(name => {
     const people = fetch('https://swapi.dev/api/people/', {
        method: 'GET'
     });

     console.log(people);

     const ul = document.querySelector("#list");
     const li = document.createElement("li");
     const btn = document.createElement("button");
    
     ul?.append(li)
     li.append(btn);
     btn.textContent = people;                    
     const peopleID = name.substring(29,31);
     btn.addEventListener('click', function() {
        alert(`https://swapi.dev/api/people/${peopleID}`);
        
    });
    });                                             
    });

