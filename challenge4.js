// 1. Start with an array of hobbies. Print out only the words that end in "ing".

//goal: only print words that end in 'ing'

var arrayHobbies = ['climbing', 'cooking', 'play the piano', 'guitar', 'reading', 'swim']

//psuedocode: 
// function onlyIng(array){
// for(var i = 0; i<array.length; i++) {
//     if(array[i].includes('ing')){
//         console.log (array[i])
//     } 
// }
// }

// onlyIng(arrayHobbies)

//final solution
function onlyIng2(array){
    var newArray = []
    for (var i = 0; i<array.length; i++){
        if(array[i].includes('ing')){
           newArray.push(array[i])
        }
    }
    return newArray
}
console.log(onlyIng2(arrayHobbies))