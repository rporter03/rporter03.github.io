document.getElementById("btn-draw-scene").onclick = () => {
    const scene = document.getElementById("scene");
    scene.innerHTML = "";
    const hour = new Date().getHours();
    const night = hour >= 18 || hour < 6;
    const sunOrMoon = document.createElement("div");

    if(night) {
        document.body.classList.add("night");
        sunOrMoon.classList.add("moon");
    } 
    else {
        document.body.classList.remove("night");
        sunOrMoon.classList.add("sun");
    }

    for(let i = 0; i < 6; i++) {
        const cloud = document.createElement("div");
        cloud.classList.add("cloud");
        cloud.style.left = (i * 100 + 500) + "px";
        cloud.style.top = "300px";
        scene.append(cloud);
    }

    for(let i = 0; i < 6; i++) {
        const tree = document.createElement("div");
        tree.classList.add("tree");
        tree.style.left = (i * 100 + 500) + "px";
        const trunk = document.createElement("div");
        trunk.classList.add("tree-trunk");
        const leaves = document.createElement("div");
        leaves.classList.add("tree-leaves");
        tree.append(leaves);
        tree.append(trunk);
        scene.append(tree);
    }
    scene.append(sunOrMoon);
}