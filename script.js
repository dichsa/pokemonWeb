
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


const pokeCard = document.querySelector('[data-poke-card]');
const pokeName = document.querySelector('[data-poke-name]');
const pokeImg = document.querySelector('[data-poke-img]');
const pokeImgContainer = document.querySelector('[data-poke-img-container]');
const pokeId = document.querySelector('[data-poke-id]');
const pokeTypes = document.querySelector('[data-poke-types]');
const pokeStats = document.querySelector('[data-poke-stats]');

const typeColors = {
  electric: '#FFEA70',
  normal: '#B09398',
  fire: '#FF675C',
  water: '#0596C7',
  ice: '#AFEAFD',
  rock: '#999799',
  flying: '#7AE7C7',
  grass: '#4A9681',
  psychic: '#FFC6D9',
  ghost: '#561D25',
  bug: '#A2FAA3',
  poison: '#795663',
  ground: '#D2B074',
  dragon: '#DA627D',
  steel: '#1D8A99',
  fighting: '#2F2F2F',
  default: '#2A1A1F',
};

const searchPokemon = event => {
  event.preventDefault();
  const {value} = event.target.pokemon;
  fetch(`https://pokeapi.co/api/v2/pokemon/"${value.toLowerCase()}`)
    .then(data => data.json())
    .then(response => renderPokemonData(response))
    .catch(err => renderNotFound())
}

const renderPokemonData = data => {
  const sprite = data.sprites.front_default;/*
}