const container = document.querySelector('#container')
const input = document.querySelector('input');
const clear = document.querySelector('#clear');
const black = document.querySelector('#black');
const color = document.querySelector('#color');
const rainbow = document.querySelector('#rainbow');
const gradient = document.querySelector('#gradient');
let currentColor;
let currentMode;
let mouseDown = false

document.querySelector('#container').addEventListener('dragstart', e => e.preventDefault());

document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

black.onclick = () => setCurrentMode('default');
color.oninput = (e) => setColor(e.target.value);
color.onclick = () => setCurrentMode('color');
rainbow.onclick = () => setCurrentMode('rainbow');
gradient.onclick = () => setCurrentMode('gradient');


input.addEventListener('change', getSize);

clear.addEventListener('click', function () {
    document.querySelectorAll('.grid').forEach(e => e.classList.add('cleared'));
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

    document.querySelectorAll('.grid').forEach(e => container.removeChild(e));

    for (let i = 0; i < (size ** 2); i++) {
        const grid = document.createElement('div');
        grid.setAttribute('class', 'grid');
        grid.addEventListener('mouseover', sketch);
        grid.addEventListener('mousedown', sketch);
        container.appendChild(grid);
    }
    document.querySelectorAll('.grid').forEach(e => e.style.width=grid_in_string);
}

function sketch(e) {
    if (e.type === 'mouseover' && !mouseDown) return
    if (currentMode === 'rainbow') {
        const randomR = Math.floor(Math.random() * 256)
        const randomG = Math.floor(Math.random() * 256)
        const randomB = Math.floor(Math.random() * 256)
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`
    } else if (currentMode === 'color') {
        e.target.style.backgroundColor = currentColor
    } else if (currentMode === 'default') {
        e.target.style.backgroundColor = '#000000'
    } else if (currentMode === 'gradient') {
        e.target.style.backgroundColor = currentColor;
        console.log(currentColor);
    }
}

function setCurrentMode(newMode) {
    currentMode = newMode
}

function setColor(selectedColor) {
    currentColor = selectedColor;
}





