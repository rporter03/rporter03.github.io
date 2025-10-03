class Painting {
    constructor(name, artist, image, framed) {
        this.name = name;
        this.artist = artist;
        this.image = image;
        this.framed = framed;
    }

    get item() {
        const section = document.createElement("section");
        section.classList.add("picture"); // add picture class

        // header
        const h3 = document.createElement("h3");
        h3.innerHTML = this.name;
        h3.classList.add("title");
        section.append(h3);

        // container 
        const container = document.createElement("div");
        container.classList.add("columns");
        section.append(container);

        // columns
        const div1 = document.createElement("div");
        container.append(div1);
        
        const div2 = document.createElement("div");
        container.append(div2);
        const img = this.picture(this.image);
        div2.append(img);

        img.onclick = () => {
            const popup = document.getElementById("popup");
            const popupImage = document.getElementById("popup-image");
            const popupMessage = document.getElementById("popup-message");

            popupImage.src = `images/${this.image}`;
            popupImage.alt = `${this.name} by ${this.artist}`;
            popupMessage.innerHTML = `${this.name} by ${this.artist}  - ${this.framed ? "Framed" : "Unframed"}`;

            popupImage.classList.remove("framed");
            if (this.framed) {
                popupImage.classList.add("framed");
            }

            popup.classList.remove("hidden");
        }
        h3.onclick = img.onclick;
        return section;
    }

    picture(filename) {
        const img = document.createElement("img");
        img.src = `images/${filename}`;
        return img;
    }

    paragraph(artist) {
        const p = document.createElement("p");
        p.innerHTML = `by ${artist}`;
        return p;
    }
}

const paintings = [
    new Painting("Starry Night", "Vincent van Gogh", "starry-night.webp", true),
    new Painting("The Birth of Venus", "Sandro Botticelli", "tbov.webp", true),
    new Painting("Mona Lisa", "Leonardo da Vinci", "mona-lisa.webp", true),
    new Painting("The Kiss", "Gustav Klimt", "the-kiss.webp", false),
    new Painting("Girl with a Pearl Earring", "Johannes Vermeer", "gwape.webp", false)
];

window.onload = () => {
    const content = document.getElementById("content");
    const gallery = document.createElement("div");
    gallery.classList.add("columns");
    content.append(gallery);

    paintings.forEach(painting=>{
        const div = document.createElement("div");
        div.classList.add("one");
        div.append(painting.item);
        gallery.append(div);
    });

    document.getElementById("close").onclick = () => {
        const popup = document.getElementById("popup");
        popup.classList.add("hidden");
    };
}