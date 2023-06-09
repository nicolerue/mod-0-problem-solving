// 1. Start with an array of travel destinations. Print every travel destination in alphabetical order embedded in a sentence using string interpolation. For example, if the destination is "New York City", print something like "The next place I want to visit is New York City!"

//Goal: print the travel desinations in a sentence in alpha order 

//Psuedocode 

// var arrTravel = ['Haida Gwaii', 'Alaksa', 'Powell River', 'Salt Spring Islands']

// function travelSentence (array){
//     for (var i=0; i<array.length; i++) {
//         console.log(`The next destination is ${array[i]}`)
//     }
// }

//FINAL CODE: 

var arrTravel = ['Haida Gwaii', 'Alaksa', 'Powell River', 'Salt Spring Islands']

function travelSentence (array){
    var arrAlpha = array.sort()
    for (var i=0; i<arrAlpha.length; i++) {
        console.log(`The next destination is ${arrAlpha[i]}`)
    }
}

travelSentence(arrTravel)