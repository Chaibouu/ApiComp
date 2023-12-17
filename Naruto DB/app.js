let button = document.querySelector(".btn")
let pokemon = document.querySelector("#pokemon")
let niveau = document.querySelector(".niveau")
let nom = document.querySelector(".nom")

const changePokemon = async()=>{
    let randomNumber = Math.ceil(Math.random()*200 + 1);

    let requestString = `https://narutodb.xyz/api/character/${randomNumber}`

    let data = await fetch(requestString)
    console.log(data);

    let reponse = await data.json()
    console.log(reponse);

    pokemon.src = reponse.images;
    niveau.textContent = `#${reponse.id}`;
    nom.textContent = reponse.name; 
}

changePokemon()

button.addEventListener("click", changePokemon)