const root = document.querySelector(':root');

// const getCSSVariable = () => {
//     const rootStyles = getComputedStyle(root);
//     const backgroundStyle = rootStyles.getPropertyValue('--background-clr')
//     return backgroundStyle;
// }

const checkColor = (color) => {
    const defaultColor = '#ffffff';
    if (typeof(color) === 'undefined') {
        return defaultColor;
    }
    return color;
};

const hexToRgb = (hex) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [ r, g, b ];
}

const color1Display = document.querySelector('#users-color-1');
const color2Display = document.querySelector('#users-color-2');

const changeGradientDisplay = (color1, color2) => {
    color1 = hexToRgb(color1);
    color2 = hexToRgb(color2);
    color1Display.textContent = color1;
    color2Display.textContent = color2;
};

const changeBackground = (color1, color2) => {
    color1 = checkColor(color1);
    color2 = checkColor(color2);
    root.style.setProperty('--background-clr', `linear-gradient(to right, ${color1}, ${color2})`);

    changeGradientDisplay(color1, color2);
}

const color1Input = document.querySelector('#color-1-input');
const color2Input = document.querySelector('#color-2-input');

let color1;
let color2;

[color1Input, color2Input].forEach(colorInput => colorInput.addEventListener('input', (e) => {
    const inputId = e.target.id;
    switch(inputId) {
        case 'color-1-input':
            color1 = document.querySelector(`#${inputId}`).value;
            break;
        case 'color-2-input':
            color2 = document.querySelector(`#${inputId}`).value;
            break;
    };

    changeBackground(color1, color2)
}));