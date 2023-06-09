// 1. Write a method or function that removes all instances of the letter <strong>s</strong> in a string. The method or function should accept a string as an argument and return the same string with every instance of the letter <strong>s</strong> removed.
//goal - return a string with no letter s 
//pseudocode

// var string = 'this is a String with letters both in UPPERCASE and lowercase'

// function removesS (string){
// return string.replaceAll("s", '').replaceAll("S", '')
// }

// console.log(removesS(string))
//final solution

var string = 'this is a String with letters both in UPPERCASE and lowercase'

function removesS (string){
return string.replaceAll("s", '').replaceAll("S", '')
}

console.log(removesS(string))
