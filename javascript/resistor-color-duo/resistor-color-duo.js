//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white' ];
const decodeColors = (colors) =>  parseInt(colors.map((color) => COLORS.indexOf(color)).join(''));

export const decodedValue = (args) => {
    let [color1, color2] = args;
    return decodeColors([color1, color2]);
};

