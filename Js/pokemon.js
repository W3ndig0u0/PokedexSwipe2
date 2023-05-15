const colors = {
  fire: '#EE8130',
  grass: '#7AC74C',
  electric: '#F7D02C',
  water: '#6390F0',
  ground: '#E2BF65',
  rock: '#B6A136', 
  fairy:'#D685AD', 
  poison: '#A33EA1',
  bug: '#A6B91A',
  dragon: '#6F35FC',
  psychic: '#F95587',
  flying: '#A98FF3',
  fighting: '#C22E28', 
  normal: '#A8A77A',
  ice: '#96D9D6',
  dark: '#705746',
  steel:  '#B7B7CE',
  ghost:  '#735797'
};

const typeImg = {
  fire: "https://i.imgur.com/5DP7q71.png",
  grass: "https://i.imgur.com/Mwt2to1.png",
  electric: "https://i.imgur.com/L0ToHpZ.png",
  water: "https://i.imgur.com/MLrW8sM.png",
  ground:  "https://i.imgur.com/dFVrsD2.png",
  rock: "https://i.imgur.com/nQf7yK5.png",
  fairy: "https://i.imgur.com/ifIVH5O.png",
  poison: "https://i.imgur.com/tpEqp3O.png",
  bug:  "https://i.imgur.com/5N9JFCq.png",
  dragon: "https://i.imgur.com/zeZiQYf.png",
  psychic:"https://i.imgur.com/SeIpxwa.png",
  flying: "https://i.imgur.com/0hSckw2.png",
  fighting: "https://i.imgur.com/bZSxj0s.png",
  normal: "https://i.imgur.com/GTGp9Ms.png",
  ice:  "https://i.imgur.com/LgnK83E.png",
  dark: "https://i.imgur.com/4ZkfIlw.png",
  steel:  "https://i.imgur.com/tCC7tJQ.png",
  ghost: "https://i.imgur.com/z1qi568.png"
};


function fetchPokemon() {
  for (let i = 0; i < 5; i++) {
    let url = "https://pokeapi.co/api/v2/pokemon/";
    let random = Math.floor(Math.random() * 1010 + 1);
    let pokemonUrl = url + random;

    fetch(pokemonUrl)
      .then(response => response.json())
      .then(result => {
        CreatePokemonCard(result);
      });
  }
}

  
  function CreatePokemonCard(res) {
    console.log(res);

    const pokemonName = res.name;
    const pokemonId = res.id;
    console.log(pokemonId);

    const pokemonTypeImg1 = typeImg[(res?.types[0]?.type.name)];
    const pokemonType1 = res?.types[0]?.type.name;
    let color = colors[(res.types.map(type => type.type.name))];
    let color2 = colors[(res?.types[0]?.type.name)];
    let pokemonType2;
    let pokemonTypeImg2;


    if (res.types[1] !== undefined) {
       color = colors[(res?.types[0]?.type.name)];
       color2 = colors[(res?.types[1]?.type.name)];
      pokemonType2 = res?.types[1]?.type.name;
      pokemonTypeImg2 = typeImg[(res?.types[1]?.type.name)];
    }

    PokemonCard(color, color2, pokemonId, pokemonName, pokemonTypeImg1, pokemonTypeImg2, pokemonType1, pokemonType2);

  }
  

  function PokemonCard(color, color2, pokemonId, pokemonName, pokemonTypeImg1, pokemonTypeImg2, pokemonType1, pokemonType2){
    
    const pokemonCard = document.createElement('div');
    pokemonCard.className = "pokemonCardContainer";
    pokemonCard.style.backgroundImage = `linear-gradient(190deg, ${color}, 40%, ${color2})`;
    
    const pokemonImgContainer = document.createElement('div');
    pokemonImgContainer.className = "pokemonImgContainer";
    
    const pokemonBoxImg = document.createElement('div');
    pokemonBoxImg.className = "pokemonBoxImg";
    
    const pokemonImg = document.createElement('img');
    pokemonImg.className = "pokemonImg";
    pokemonImg.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemonId}.png`;
    pokemonImg.alt = pokemonName;
    
    pokemonBoxImg.appendChild(pokemonImg);
    pokemonImgContainer.appendChild(pokemonBoxImg);
    
    const pokemonStatsContainer = document.createElement('div');
    pokemonStatsContainer.className = "pokemonStatsContainer";
    
    const pokemonIdElement = document.createElement('p');
    pokemonIdElement.className = "pokemonId";
    pokemonIdElement.textContent = pokemonId;
    
    const pokemonNameElement = document.createElement('h1');
    pokemonNameElement.className = "pokemonName";
    pokemonNameElement.textContent = pokemonName;
    
    const typesContainer = document.createElement('div');
    typesContainer.className = "types";
    
    const typeImg1 = document.createElement('img');
    typeImg1.className = "typeImg type1";
    typeImg1.src = pokemonTypeImg1;
    typeImg1.setAttribute('data-tooltip', pokemonType1);
    typeImg1.alt = pokemonType1;
    
    const typeImg2 = document.createElement('img');
    typeImg2.className = "typeImg type2";
    typeImg2.src = pokemonTypeImg2;
    typeImg2.setAttribute('data-tooltip', pokemonType2);
    typeImg2.alt = pokemonType2;
    
    typesContainer.appendChild(typeImg1);
    typesContainer.appendChild(typeImg2);
    pokemonStatsContainer.appendChild(pokemonIdElement);
    pokemonStatsContainer.appendChild(pokemonNameElement);
    pokemonStatsContainer.appendChild(typesContainer);
    
    pokemonCard.appendChild(pokemonImgContainer);
    pokemonCard.appendChild(pokemonStatsContainer);
    
    const pokemonsContainer = document.querySelector('.pokemons');
    pokemonsContainer.appendChild(pokemonCard);
    
    pokemonCard.innerHTML = pokemonCardInnerHTML;
    document.querySelector(".pokemons")?.appendChild(pokemonCard)

  }
  
  fetchPokemon();
  
  document.querySelector('.nextButton').addEventListener('click', () => {
    fetchPokemon();
  });
