document.getElementById("btn-display").onclick = () => {
    const displaySection = document.getElementById("loop-result");
    const ul = document.createElement("ul");
    displaySection.append(ul);

    // loops - write numbers 1-10
    for(let i = 0; i < 10; i++) {
        const li = document.createElement("li");
        li.innerHTML = `${i} banana(s)`;
        ul.append(li);
    }
};

document.getElementById("btn-count").onclick = () => {
    const error = document.getElementById("error-number");
    error.innerHTML = "";
    const startNum = parseInt(document.getElementById("txt-start").value);
    const endNum = parseInt(document.getElementById("txt-end").value);
    const resultDiv = document.getElementById("d-count");
    resultDiv.innerHTML = "";
    if (startNum > endNum) {
        error.innerHTML = "* The second number must be bigger than the first";
        return;
    }
    
    // loop for every number from start to end; display the number in paragraphs
    for(let i = startNum; i <= endNum; i++) {
        const p = document.createElement("p");
        p.innerHTML = i;
        resultDiv.append(p);
        p.onclick = () => {
            console.log(`You clicked Number ${i}`);
        };
    }
};

document.getElementById("btn-show-toys").onclick = () => {
    const toyList = document.getElementById("toy-list");
    toyList.innerHTML = "";
    const toys = ["ball", "skipping rope", "doll", "mini car", "elmo"];
    
    /* first way to iterate */
    /*for(i = 0; i < toys.length; i++) {
        const li = document.createElement("li");
        li.innerHTML = toys[i];
        toyList.append(li);
    }*/

    /* second way to iterate (preferred; automatically iterates over a for loop. good for arrays) */
    toys.forEach((toy)=>{
        const li = document.createElement("li");
        li.innerHTML = toy;
        toyList.append(li);
    });
};

document.getElementById("btn-show-toy-prices").onclick = () => {
    // associative array
    const toys = [];
    toys["ball"] = 2.99;
    toys["barbie"] = 19.99;
    toys["skipping rope"] = 1.98;
    toys["matchbox car"] = 2.54;

    const toyDiv = document.getElementById("toy-prices");
    toyDiv.innerHTML = "";
    const priceP = document.getElementById("price-p");
    priceP.innerHTML = "";

    // for in loop (for each loops do not work with associative arrays)
    for(let toy in toys) {
        const p = document.createElement("p");
        p.innerHTML = toy;
        toyDiv.append(p); 
        
        // show toy price when paragraph is clicked
        p.onclick = () => {
            priceP.innerHTML = `${toy} costs $${toys[toy]}`
        };
    }
};