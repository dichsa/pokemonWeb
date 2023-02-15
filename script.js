
const apiButton = document.getElementById('apiButton');
const apiData = document.getElementById('apiData');
const input = document.getElementById("searchInput");
const infoBox = document.getElementById('infoBox');

const callAPI = () => {
  const valor = input.value;
  fetch("https://pokeapi.co/api/v2/pokemon/"+valor+"/")
  .then(res => res.json())
  .then(data => {
    infoBox.innerText = `Nombre: ${JSON.stringify(data.name)}
                        Experiencia Base: ${JSON.stringify(data.base_experience)}
                        ${JSON.stringify(data.sprites.front_default)}`
  });
}

apiButton.addEventListener('click', callAPI);