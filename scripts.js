const container = document.querySelector("#container")
const input = document.querySelector("input");

function getSize() {
    if (Number.isInteger(parseInt(this.value))) {
        createGrid(parseInt(this.value));
    } else {
        alert("NaN");
    }
}

let size = input.addEventListener("change", getSize);

function createGrid(size) {
   // let container_size = document.getElementById("container").style.width;
    let grid_size = 500/size;
    let grid_in_string = grid_size.toString()+"px";

    for (let i = 0; i < (size*size); i++) {
        const grid = document.createElement('div');
        grid.setAttribute("class", "grid");
        container.appendChild(grid);
    }

    document.querySelectorAll(".grid").forEach(el => el.style.width=grid_in_string);
}