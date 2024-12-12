// buscar o campo de texto
const input = document.querySelector("#busca");

// buscar o div que vai ficar o retorno dos dados da api
const info = document.querySelector("#info");

// buscar o campo de texto para habilidade
const habilidadeInput = document.querySelector("#habilidade");

// adicionar o listener no evento input
input.addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    const nome = event.target.value; // o que o usuário digitou no campo
    // buscar lá na api do pokedex pela variável nome
    const resultado = await fetch("https://pokeapi.co/api/v2/pokemon/" + nome.toLowerCase());
    // verifica se talquei
    if (resultado.ok) {
      // converte os dados de retorno do fetch (doidões) para objeto javascript
      const dados = await resultado.json();
      // guardar o resultado em um objeto {}
      const pokemon = {
        nome: dados.name,
        imagem: dados.sprites.front_default,
        altura: parseInt(dados.height) / 10,
        peso: parseInt(dados.weight) / 10,
        tipos: dados.types.map(typeInfo => typeInfo.type.name).join(', '),
        fraquezas: await getFraquezas(dados.types)
      };
      info.innerHTML = "<h1>" + pokemon.nome + "</h1>";
      info.innerHTML += '<img src="' + pokemon.imagem + '">';
      info.innerHTML += "<p>Altura: " + pokemon.altura + " metros </p>";
      info.innerHTML += "<p>Peso: " + pokemon.peso + " kg </p>";
      info.innerHTML += "<p>Tipos: " + pokemon.tipos + "</p>";
      info.innerHTML += "<p>Fraquezas: " + pokemon.fraquezas + "</p>";
      info.style.display = 'block';
    } else {
      info.innerHTML = "<h1>Pokémon não encontrado</h1>";
      info.style.display = 'block';
    }
  }
});

// adicionar o listener no evento input para habilidade
habilidadeInput.addEventListener("keypress", async (event) => {
  if (event.key == "Enter") {
    const habilidade = event.target.value; // o que o usuário digitou no campo de habilidade
    // buscar lá na api do pokedex pela habilidade
    const resultado = await fetch(`https://pokeapi.co/api/v2/ability/${habilidade.toLowerCase()}`);
    if (resultado.ok) {
      const dadosHabilidade = await resultado.json();
      if (dadosHabilidade.pokemon.length > 0) {
        const primeiroPokemon = dadosHabilidade.pokemon[0].pokemon; // pega o primeiro Pokémon com a habilidade
        const pokemonResultado = await fetch(`https://pokeapi.co/api/v2/pokemon/${primeiroPokemon.name}`);
        const dadosPokemon = await pokemonResultado.json();
        
        // guardar o resultado em um objeto {}
        const pokemon = {
          nome: dadosPokemon.name,
          imagem: dadosPokemon.sprites.front_default,
          altura: parseInt(dadosPokemon.height) / 10,
          peso: parseInt(dadosPokemon.weight) / 10,
          tipos: dadosPokemon.types.map(typeInfo => typeInfo.type.name).join(', '),
          fraquezas: await getFraquezas(dadosPokemon.types)
        };
        
        info.innerHTML = "<h1>" + pokemon.nome + "</h1>";
        info.innerHTML += '<img src="' + pokemon.imagem + '">';
        info.innerHTML += "<p>Altura: " + pokemon.altura + " metros </p>";
        info.innerHTML += "<p>Peso: " + pokemon.peso + " kg </p>";
        info.innerHTML += "<p>Tipos: " + pokemon.tipos + "</p>";
        info.innerHTML += "<p>Fraquezas: " + pokemon.fraquezas + "</p>";
        info.style.display = 'block';
      } else {
        info.innerHTML = "<h1>Nenhum Pokémon encontrado com essa habilidade</h1>";
        info.style.display = 'block';
      }
    } else {
      info.innerHTML = "<h1>Habilidade não encontrada</h1>";
      info.style.display = 'block';
    }
  }
});

// Função para obter fraquezas com base nos tipos
async function getFraquezas(types) {
  const fraquezas = [];
  for (const type of types) {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type.type.name}`);
    const typeData = await response.json();
    typeData.damage_relations.double_damage_from.forEach(d => {
      if (!fraquezas.includes(d.name)) {
        fraquezas.push(d.name);
      }
    });
  }
  return fraquezas.join(', ');
}
