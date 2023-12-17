let button = document.querySelector(".btn")
let pokemon = document.querySelector("#pokemon")
let niveau = document.querySelector(".niveau")
let nom = document.querySelector(".nom")

const changePokemon = async()=>{
    let randomNumber = Math.ceil(Math.random()*150 + 1);

    let requestString = `https://pokeapi.co/api/v2/pokemon/${randomNumber}`

    let data = await fetch(requestString)
    console.log(data);

    let reponse = await data.json()
    console.log(reponse);

    pokemon.src = reponse.sprites.front_default;
    niveau.textContent = `#${reponse.id}`;
    nom.textContent = reponse.name;
}

changePokemon()

button.addEventListener("click", changePokemon)