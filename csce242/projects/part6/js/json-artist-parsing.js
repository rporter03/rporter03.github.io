const getArtists = async() => {
    const url = "https://rporter03.github.io/csce242/projects/part6/json/artists.json";
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("ERROR!!!!");
    }
};

const showArtists = async() => {
    const artists = await getArtists();
    const artistListDiv = document.getElementById("artist-list");

    artists.forEach((artist)=>{

        // create section for each artist
        const artistSection = document.createElement("section");
        shoeSection.classList.add("artist"); // may need to make new class; artist-browse ?

        // heading
        const h3 = document.createElement("h3");
        artistSection.append(h3);
        h3.innerHTML = artist.artist;

        // genre
        const h4 = document.createElement("h4");
        artistSection.append(h4);
        h4.innerHTML = `Genre: ${artist.genre}`;

        // description
        const p = document.createElement("p");
        artistSection.append(p);
        p.innerHTML = artist.description;

        // image
        const img = document.createElement("img");
        artistSection.append(img);
        img.src = `https://rporter03.github.io/csce242/projects/part6/images/${artist.img}`;

        // append
        artistListDiv.append(artistSection);
    })
};

showArtists();