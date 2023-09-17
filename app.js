




const createGallery = function(){
    for (let i = 1; i <= 151; i++) {
        const pokeDiv = document.createElement('div');
        const pokeCard = document.createElement('img');
        const pokeLabel = document.createElement('span');
        pokeDiv.classList.add('pokemon');
        pokeCard.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${i}.png`;
        pokeLabel.innerText = `#${i}`;
        pokeDiv.appendChild(pokeCard);
        pokeDiv.appendChild(pokeLabel);
        cont.append(pokeDiv);
        button1.type = 'hidden';

    }
}

