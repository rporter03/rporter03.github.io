const beforeImages = [];
beforeImages["Anka"] = "images/anka-before.webp";
beforeImages["Milly"] = "images/milly-before.webp";
beforeImages["Sunny"] = "images/sunny-before.webp";
beforeImages["Wesley"] = "images/wesley-before.webp";
const afterImages = [];
afterImages["Anka"] = "images/anka-after.webp";
afterImages["Milly"] = "images/milly-after.webp";
afterImages["Sunny"] = "images/sunny-after.webp";
afterImages["Wesley"] = "images/wesley-after.webp";

window.onload = () => {
    const dogGallery = document.getElementById("dog-gallery");
    for(let name in beforeImages) {
        const column = document.createElement("div");
        column.classList.add("one");

        const dog = document.createElement("div");
        dog.classList.add("dog");

        const img = document.createElement("img");
        img.src = beforeImages[name];
        img.classList.add("dog-image");

        const hoverMessage = document.createElement("div");
        hoverMessage.classList.add("hover-message");
        hoverMessage.innerHTML = `Please adopt ${name}`;

        dogGallery.append(column);
        column.append(dog);
        dog.append(img);
        dog.append(hoverMessage);

        dog.onclick = () => {
            const popup = document.getElementById("popup");
            const popupImage = document.getElementById("popup-image");
            const popupMessage = document.getElementById("popup-message");

            popupImage.src = afterImages[name];
            popupImage.alt = `${name} after adoption`
            popupMessage.innerHTML = `${name} after adoption`
            popup.classList.remove("hidden");
        }
    }
    
    document.getElementById("close").onclick = () => {
        const popup = document.getElementById("popup");
        popup.classList.add("hidden");
    }
}