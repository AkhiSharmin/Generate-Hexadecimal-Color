

function main() {
    const btn = document.getElementById('change-btn');
    const root = document.getElementById('root');
    const input = document.getElementById('output');

    btn.addEventListener('click', function () {
        bgHex = generateRandomHexColor();
        root.style.backgroundColor = bgHex;
        input.value = bgHex;
    })
}


function generateRandomHexColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}

main()