const results = document.querySelector('#results');

const searchButton = document.querySelector('#searchButton');


async function search() {
    const queryInput = document.querySelector('#input');
    const response = await fetch(`https://swapi.dev/api/${queryInput.value}`);
    const data = await response.json();

    results.innerHTML = '';

      const ul = document.createElement('ul');
      data.results.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        ul.appendChild(li);
      });
      results.appendChild(ul);
      
        console.log(results);
    }


      
      searchButton.addEventListener('click', async () => {

        await search();
      });
