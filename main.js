function getCharacters(done){
    const results = fetch("https://rickandmortyapi.com/api/character")
    results
    .then(response => response.json())
    .then(data => {
        done(data);
    })
}


getCharacters(data => {
    console.log(data);}
);






getCharacters(data => {
    data.results.forEach(character => {
        const carta = document.createRange().createContextualFragment(`
                    <div class="cartas">
                <div class="imagen">
                    <img src="${character.image}" alt="lol">
                </div>
                <div class="info">
                    <h2>${character.name}</h2>
                    <p>${character.status}</p>
                </div>
            </div>

        `)
        const main = document.querySelector("main");
        const container = document.querySelector(".container");
        container.append(carta);
    });
});
