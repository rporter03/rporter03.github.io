const getShoes = async() => {
    const url = "https://portiaportia.github.io/json/shoes.json";
    try {
        const response = await fetch(url);
        return response.json();
    }
    catch(error) {
        console.log("ERROR!!!!!!");
    }
};

const showShoes = async() => {
    const shoes = await getShoes();
    const shoeListDiv = document.getElementById("shoe-list");

    shoes.forEach((shoe)=>{
        //make a section for each shoe; put all data in then append it to shoe list
        const shoeSection = document.createElement("section");
        shoeSection.classList.add("shoe");
        
        // heading
        const h3 = document.createElement("h3");
        shoeSection.append(h3);
        h3.innerHTML = shoe.name;

        // brand
        const p = document.createElement("p");
        shoeSection.append(p);
        p.innerHTML = `Brand: ${shoe.brand}`
        
        // loop through reviews; make ul li list
        const ul = document.createElement("ul");
        shoeSection.append(ul);
        shoe.reviews.forEach((review)=>{
            const li = document.createElement("li");
            li.innerHTML = review;
            ul.append(li);
        })

        // image example
        /* const img = document.createElement("img");
        shoeSection.append(img);
        img.src = `https://portiaportia.github.io/json/${shoe.img}`; */

        // append
        shoeListDiv.append(shoeSection);
    });
};

showShoes();