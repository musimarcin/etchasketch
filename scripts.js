const container = document.querySelector('#container')
const input = document.querySelector('input');
const clear = document.querySelector('button');


input.addEventListener("change", getSize);
clear.addEventListener("click", function () {
    document.querySelectorAll('.grid').forEach(item => item.classList.remove('hovered'))
});

function getSize() {
    let size = parseInt(this.value);
    if (Number.isInteger(size) && size < 65) {
        createGrid(parseInt(this.value));
    } else {
        alert("NaN or too big");
    }
}

function createGrid(size) {
    let grid_size = container.clientWidth/size;
    let grid_in_string = grid_size.toString()+"px";

    let existed_grid = document.querySelectorAll(".grid");
    existed_grid.forEach(item => container.removeChild(item));

    for (let i = 0; i < (size*size); i++) {
        const grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        container.appendChild(grid);
    }

    document.querySelectorAll(".grid").forEach(item => item.style.width=grid_in_string);
    document.querySelectorAll(".grid").forEach(item => item.addEventListener('mouseenter', function () {
        item.classList.add('hovered')
    }))
}

