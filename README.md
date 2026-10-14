# 🔎 Buscador de Pokémon

Aplicação web que consulta a [PokéAPI](https://pokeapi.co) e mostra os dados de um Pokémon: imagem, altura, peso, tipos e fraquezas. A busca pode ser feita pelo **nome** do Pokémon ou por uma **habilidade**.

![Tela inicial do buscador](docs/pokemon-inicio.png)

## ✨ Funcionalidades

* **Busca por nome:** digite o nome (em inglês, como `pikachu`) e aperte Enter.
* **Busca por habilidade:** digite o nome de uma habilidade (por exemplo `static`) e aperte Enter. O resultado é o primeiro Pokémon que a API lista para essa habilidade.
* **Ficha do Pokémon:** nome, imagem, altura (em metros), peso (em kg), tipos e fraquezas.
* **Fraquezas calculadas a partir dos tipos:** o programa consulta cada tipo do Pokémon na API e junta os tipos que causam dano dobrado.
* **Mensagens** para Pokémon ou habilidade não encontrados.

![Resultado da busca por charizard](docs/pokemon-busca-nome.png)

## 🛠️ Tecnologias

* HTML5 e CSS3
* JavaScript (`fetch`, `async/await` e manipulação do DOM)
* [PokéAPI](https://pokeapi.co) (API pública e gratuita)

## 📂 Estrutura

```text
Pokemon-atv opc/
├── index.html   # campos de busca e área do resultado
├── main.css     # estilos
└── main.js      # consultas à API e exibição dos dados
```

## ▶️ Como rodar

Não precisa instalar nada. Abra o arquivo `Pokemon-atv opc/index.html` no navegador (é preciso ter internet para acessar a PokéAPI).

## 🔭 Limitações conhecidas e próximos passos

* O cálculo de fraquezas é simplificado: Pokémon com dois tipos podem ter resistências ou imunidades de um tipo que anulam a fraqueza do outro, e isso ainda não é considerado.
* A busca por habilidade mostra só o primeiro Pokémon da lista. Dá para listar todos e deixar a pessoa escolher.
* Tratar falhas de rede (hoje, se a internet cair, nada é exibido) e mostrar um indicador de carregamento.
* Aceitar o nome em português ou buscar com sugestões enquanto digita.

## 👩‍💻 Autora

**Inglid Sandeski**: estudante de Sistemas de Informação na UNEMAT.
[GitHub](https://github.com/inglid-sandeski)
