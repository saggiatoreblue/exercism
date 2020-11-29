//
// This is only a SKELETON file for the 'Resistor Color Duo' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const COLORS = ['black','brown','red','orange','yellow','green','blue','violet','grey','white' ];
const decodeColor = (color) =>  String(COLORS.indexOf(color));
export const decodedValue = ([color1, color2]) =>  decodeColor(color1) + decodeColor(color2);


