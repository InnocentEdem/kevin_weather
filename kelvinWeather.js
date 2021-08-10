const kelvin = 293; //the kelvin constant
var celsius = kelvin-273; //how to get celsius
var fahrenheit = celsius *(9/5) +32; //fahrenheit equivalent
fahrenheit = Math.floor(fahrenheit);//we need to floor the fraction
console.log(`the temperature is ${fahrenheit} degrees Fahrenheit`)
