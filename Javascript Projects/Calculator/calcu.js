
function Displaydata(value) {
    const display = document.getElementById('display');
    display.value += value;
}

function cleardata() {
    const display = document.getElementById('display');
    display.value = '';
}

function deletedata() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1);
}

function calculate() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = 'Error';
    }
}
