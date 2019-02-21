// "constructor"
var people = {};

// initialize our people "class"
people.Benny = 20;
people.Chirag = 21;
people.Dickerson = 90;

// The following also works.
people['Benny'] = 20;
people['Chirag'] = 21;
people['Dickerson'] = 90;

console.log(people);


// Alternatively

// key/value pair
var people = {
    Benny: 20,
    Chirag: 21,
    Dickerson: 90
};


// nesting
var people = {
    Benny: {
        age: 20,
        gender: 'male'
    },
    Chirag: {
        age: 21,
        gender: 'male'
    },
    Dickerson: {
        age: 30,
        gender: 'male'
    }
};

// console.log(people['Dickerson']);
// console.log(people.Dickerson); 


// Iterate through keys
for (var name in people) {
     console.log(name);
}

// Let's print out the name and ages
for (var name in people) {
 	// Note this string interpolation / string literal feature - introduced in ES2015!
      console.log(`${name}'s age is ${people[name].age}.`);
     //console.log(`${name}'s age is ${people.name.age}.`)
}

// // Question: Why would doing people.name.age not work?





people.Dickerson.getAgeSquared = function () {
    return people.Dickerson.age * people.Dickerson.age;
};

console.log(people.Dickerson)
console.log(people.Dickerson.getAgeSquared());

people.Dickerson.age = 12;
console.log(people.Dickerson.getAgeSquared());

// Question: What would happen if I ran 'people.Dickerson.getAgeSquared = 2' followed by 'people.Dickerson.getAgeSquared()'?
