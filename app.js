
let div = null;

function main() {
    const btn = document.getElementById('change-btn');
    const root = document.getElementById('root');
    const input = document.getElementById('output');

    const copyBtn = document.getElementById('copy-btn')

    btn.addEventListener('click', function () {
        bgHex = generateRandomHexColor();
        root.style.backgroundColor = bgHex;
        input.value = bgHex;
    });

    copyBtn.addEventListener('click', function () {
        window.navigator.clipboard.writeText(input.value);
        if (div !== null) {
            div.remove();
            div = null;
        }
        generateToastMessage(`${input.value} copied`)
    })
}


function generateRandomHexColor() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return `#${red.toString(16)}${blue.toString(16)}${green.toString(16)}`
}

function generateToastMessage(msg) {
    div = document.createElement('div');
    div.innerText = msg;

    div.className = 'toast-message toast-message-slide-in';

    div.addEventListener('click', function (e) {
        div.classList.remove('toast-message-slide-in')
        div.classList.add('toast-message-slide-out');


        div.addEventListener('animationend', function (e) {
            div.remove();
            div = null;
        })
    });


    document.body.appendChild(div)
}







main()