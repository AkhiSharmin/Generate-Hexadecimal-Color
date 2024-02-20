
let div = null;

function main() {
    const btn = document.getElementById('change-btn');
    const root = document.getElementById('root');
    const input = document.getElementById('output');
    const input2 = document.getElementById('output2');

    const copyBtn = document.getElementById('copy-btn')

    btn.addEventListener('click', function () {
        const color = generateColorDecimal()

        const hex = generateRandomHexColor(color);
        const rgb = generateRGBAColor(color);

        root.style.backgroundColor = hex;
        input.value = hex.substring(1);

        input2.value = rgb;

    });

    copyBtn.addEventListener('click', function () {
        window.navigator.clipboard.writeText(`#${input.value}`);
        if (div !== null) {
            div.remove();
            div = null;
        }
        if (isValidHex(input.value)) {
            generateToastMessage(`#${input.value} copied`);
        } else {
            alert('Invalid color code')
        }
    });

    input.addEventListener('keyup', function (e) {

        const color = e.target.value;
        if (color) {
            input.value = color.toUpperCase();
            if (color && isValidHex(color)) {
                root.style.backgroundColor = `#${color}`;
            }
        }
    })
}




//this function generate three random decimal number for red, green, blue
//return as an object
function generateColorDecimal() {
    const red = Math.floor(Math.random() * 255);
    const blue = Math.floor(Math.random() * 255);
    const green = Math.floor(Math.random() * 255);

    return {
        red,
        green,
        blue
    }
}


function generateRandomHexColor({ red, green, blue }) {
    // const { red, green, blue } = generateColorDecimal();


    const getToCode = (value) => {
        const hex = value.toString(16)
        return hex.length === 1 ? `0${hex}` : hex
    }


    return `#${getToCode(red)}${getToCode(green)}${getToCode(blue)}`.toUpperCase()
}



// generate rgba color code 
function generateRGBAColor({ red, green, blue }) {
    // const { red, green, blue } = generateColorDecimal();

    return `rgb(${red}, ${green}, ${blue})`
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

function isValidHex(color) {
    if (color.length !== 6) return false;
    return /^[0-9A-Fa-f]{6}$/i.test(color)
}


main()


//All Steps
// Step 1 - create onload handler

// step 2 - random color generator function

// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event

// Step 6 - activate toast message

// Step 7 - create a dynamic toast message

// step 8 - clear toast message

// step 9 - create isHexValid function

// step 10 - implement change handler on input field

// step 11 - prevent copying hex code if it is not valid

// step 12 - refactor the color generator function

// step 13 - update color code to display rbg colors