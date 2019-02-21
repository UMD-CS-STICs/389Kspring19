// // ARRAYS
// var names = ['Benny', 'Chirag', 'Dickerson']
// var stuff = [1, 2+4, "Mynamejeff", function(){return 1}]

// // console.log(stuff)







// // FOR LOOPS
// for (var i = 0; i < names.length; i++) {
//     //console.log(names[i]);
// }

// for (var i in names) {
//       //console.log(i);
// }

// for (var i in names) {
//      //console.log(names[i]);
// }

// //Introduced in ES2015
// for (var i of names) {
// 	// console.log(i);
// }







// // FUNCTIONS

// // notice how we do not need to specify type (:
// function greet(name) {
//     console.log('Hello ' + name);
// }

// //greet('Benny');

// function reverser(name) {
//     var arr = name.split(''); // arr is now an array of strings
//     arr = arr.reverse();
//     arr = arr.join(''); // note: the type of arr is now just a single string!
//     console.log(arr);
// }

// function printFirstLetter(name) {
//     console.log(name.charAt(0));
// }

// //  reverser('Benny'); 
// //  printFirstLetter('Benny'); 
// //  printFirstLetter('Glenn'); 

// // reverser(123);






// // FIRST CLASS FUNCTIONS

// function applyToArray(operator) {
//     console.log("hlelo");
// }

//  applyToArray(reverser);

// function hi() {
//     console.log('hi');
// }

// function bye() {
//     console.log('bye');
// }

// function benny() {
//     console.log('benny');
// }

// var funcs = [hi, bye, benny]
// // Exercise: Iterate through this array and exucte each function
// // for (var func of funcs) {
// //     func()
// // }






// // ANONYMOUS FUNCTIONS - function definition not bound to an identifier
// var funcs = [
//     function() {
//         console.log('hi');
//     },
//     function() {
//         console.log('bye');
//     },
//     function() {
//         console.log('benny');
//     }
// ];

// funcs[0]()

// FIRST CLASS FUNCTIONS 2

// Exercise: Modify applyToArray(operator) to print ynneB
// function applyToArray(operator) {
//     operator("Benny")
// }

// applyToArray(reverser); 





function greet(name){
    console.log("Hello " + name);
}


function reverser(name) {
    var arr = name.split(''); // arr is now an array of strings
    arr = arr.reverse();
    arr = arr.join(''); // note: the type of arr is now just a single string!
    console.log(arr);
}

function applyToArray(arr, operator) {
    var name = arr[0];
    operator(name);
}

var names = ['Benny', 'Chirag', 'Dickerson'];
applyToArray(names, reverser); 
applyToArray(names, greet);




// Run operator across all elemnts of arr
function applyToArray(arr, operator) {
    for (var element of arr){
        operator(element)
    }
}

// applyToArray(names, reverser); // OUTPUT: "ynneB", "garihC", "nosrekciD"

// FIRST CLASS + ANONYMOUS
var num = [1, 2, 3, 4, 5];
applyToArray(num, 
    function(i) {
        console.log(i + 3);
    }
);

// Lambda
var testFunction = () => {console.log("hello")}








