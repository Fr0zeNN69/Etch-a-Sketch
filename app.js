const container = document.getElementById('container');
container.addEventListener('mouseover', () => {
    container.addEventListener('mouseover', (e) => {
        if (e.target.className === 'cell')
        {
            e.target.style.backgroundColor = selectedColor;
        }
    });
})
const colorPicker = document.getElementById('colorPicker');
let selectedColor = colorPicker.value; // Culoarea inițială


colorPicker.addEventListener('input', (event) => {
    selectedColor = event.target.value;
});

function makeGrid(rows, cols)
{
    for (let i = 0; i < rows; i++)
    {
        let row = document.createElement('div');
        row.className = 'row';
        for (let j = 0; j < cols; j++)
        {
            let cell = document.createElement('div');
            cell.style.backgroundColor = 'white';
            cell.className = 'cell';
            row.appendChild(cell);
        }
        container.appendChild(row);
    }
}
function deleteGrid()
{
    const rows = document.querySelectorAll('.row');
    rows.forEach(row => row.remove());
}
//makeGrid(16, 16);

const x16 = document.getElementById('16x16');
const x32 = document.getElementById('32x32');
const x64 = document.getElementById('64x64');

x16.addEventListener('click', () => {
    deleteGrid();
    makeGrid(16, 16);
}
);
x32.addEventListener('click', () => {
    deleteGrid();
    makeGrid(32, 32);
}
);
x64.addEventListener('click', () => {
    deleteGrid();
    makeGrid(64, 64);
}
);

const resetButton = document.getElementById('reset');
resetButton.addEventListener('click', () => {
    const cells = document.querySelectorAll('.cell');
    cells.forEach(cell => cell.style.backgroundColor = 'white');
});

