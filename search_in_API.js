const results = document.querySelector('#results');
const searchForm = document.querySelector('form');
const searchButton = document.querySelector('#searchButton');
const queryInput = document.querySelector('#input');

async function search(queryInput) {

    const response = await fetch(`https://swapi.dev/api/${queryInput}`);
    const data = await response.json();

    results.innerHTML = '';

      const ul = document.createElement('ul');
      data.forEach(result => {
        const li = document.createElement('li');
        li.textContent = result.title;
        ul.appendChild(li);
      });
      results.appendChild(ul);
      
      searchForm.addEventListener('submit', async event => {
        event.preventDefault();
        await search(queryInput.value);
      });
      
      searchButton.addEventListener('click', async () => {
        await search(queryInput.value);
      });
    }

