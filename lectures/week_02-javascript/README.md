
# Week 2: JavaScript
--------------------

## What is Javascript?

JavaScript (JS) is a lightweight, interpreted, programming language with
first-class functions. It is most well-known as the scripting language for
Web pages. (Mozilla Developer Network)

Please refer to the `pre_class.md` resources to provide yourself with a
introduction to the language.

During class, we will go over **objects** and **functions**, which are very
important for Javascript and will be used extensively in our full-stack
applications. Therefore, a thorough understanding of them is required.

## JavaScript vs. ECMAScript?

ECMAScript is a standard for scripting languages. Languages like JavaScript are
based on the ECMAScript standard. Think of ECMAScript as a (Java) _interface_
and Javascript being a language that implements the interface's necessary
behavior. ECMAScript releases new features on a periodic basis, adding new
keywords, features, etc. to implementing langauges like JavaScript.

The core features of JavaScript are based on the ECMAScript standard, but
JavaScript also has other additional features that are not in the ECMA
specifications/standard. Every browser has a JavaScript interpreter.

Note that browsers must be able to support JavaScript language features.
In production, it is *extremely* important to make sure that the features of
JavaScript that you are using are supported by major browsers! There exist many
tools out there that _transpile_ code from new ECMAScript versions to
ECMAScript 5, which is a version (released in 2009) that almost all browsers
support almost all features of.

### A Brief History Lesson
(Adapted from our friends at https://stackoverflow.com/questions/912479/what-is-the-difference-between-javascript-and-ecmascript)

JavaScript derived its name from Java and initially Brendan Eich (the creator of
JS) was asked to develop a language that resembled Java for the web for Netscape.

However, Eich decided that Java was too complicated and so created a simpler
language that even a beginner could code in. This is evident in such things like
the relaxing of the need to have a semicolon.

After the language was complete, the marketing team of Netscape asked Sun to
allow them to name it JavaScript as a marketing stunt and hence why most people
who have never used JavaScript think it's related to Java.

About a year or two after JavaScript's release in the browser, Microsoft's IE
took the language and started making its own implementations such as JScript.
At the same time, IE was dominating the market and not long after Netscape had
to shut its project.

Before Netscape went down, they decided to start a standard that would guide the
path of JavaScript, named ECMAScript.

ECMAScript had a few releases and in 1999 they released their last version
(ECMAScript 3) before they went into hibernation for the next 10 years. During
these 10 years, Microsoft dominated the scenes but at the same time they weren't
improving their product and hence Firefox was born (led by Eich) and a whole
heap of other browsers such as Chrome and Opera.

### Terminology

When we are dealing with writing JavaScript in the real world, we will run
into *lots* and *lots* of unfamiliar terminology. We hope to settle a few of
those confusing terms and abbreviations here.

- ECMAScript is commonly shortened to just ES.
- ES5 = ECMAScript 5. ES5 is the JavaScript we know and use in the browser
today. ECMAScript version 5 was finished in December 2009 - the latest versions
of all major browsers (Chrome, Safari, Firefox, IE, and Edge) have implemented
version 5.
- ES6 <=> ES2015: Officially, prefer saying "ES2015" over "ES6". ES6 is the next
iteration of JavaScript, but it does not run natively in many browsers. There
are quite a few transpilers that will export ES2015 to ES5 for running in
browsers.
- ES7 <=> ES2016
- ES8 <=> ES2017
- BabelJS is the most popular transpiler that transforms versions ES2015 and
newer to old JavaScript ES5.
- TypeScript, CoffeeScript, Flow, ....: More languages providing syntactic sugar
on top of ES5 and then are transpiled into ES5 compliant JavaScript.

### Variables: Working with arrays and objects

We will build an example with students/Dickerson and their ages.

Arrays in JavaScript are heterogeneous. This means that they can hold data of
different types. For example, `[1, 'hello', function () { return 1; }]`
is a valid array.

First, we can create an array of student names:

```javascript
var names = ['Benny', 'Chirag', 'Dickerson'];
```

If we need to print everyone's names, we can use a for loop. We can use a
standard for loop or a for-each loop.

```javascript
// Output:
// "Benny"
// "Chirag"
// "Dickerson"
for (var i = 0; i < names.length; i++) {
    console.log(names[i]);
}

// Output:
// 0
// 1
// 2
for (var i in names) {
    console.log(i);
}

// Output:
// "Benny"
// "Chirag"
// "Dickerson"
for (var i in names) {
    console.log(arr[i]);
}

// Note: Introduced in ES2015
// Output:
// "Benny"
// "Chirag"
// "Dickerson"
for (var i of names) {
	console.log(i);
}

// Exercise: Print out contents of list in reverse order.
```

Consider the function `greet(name)`

```javascript
function greet(name) {
    console.log('Hello ' + name);
}

greet('Benny'); // prints "Hello Benny"
```

Notice how we do not have to specify the type of the parameter. JavaScript is a
very dynamic language - the type of variables is determined at runtime.

Similarly, we could have functions that do other operations on names:

```javascript
function reverser(name) {
    var arr = name.split(''); // arr is now an array of strings
    arr = arr.reverse();
    arr = arr.join(''); // note: the type of arr is now just a single string!
    console.log(arr);
}

function printFirstLetter(name) {
    console.log(name.charAt(0));
}

reverser('Benny'); // prints "ynneB"
printFirstLetter('Benny'); // prints 'A'
printFirstLetter(); // TypeError: Cannot read property 'charAt' of undefined
```

We can build a function that will run one of our "name operators" on each value
of an array.

First, let's write a function `applyToArray` that simply takes in one argument:
`operator`.

```javascript
function reverser(name) {
    console.log(name.split('').reverse().join(''));
}

function applyToArray(operator) {
    console.log(operator);
}

// [Function: reverse]
applyToArray(reverser);

// Exercise: What would applyToArray print out if I passed in "Hello"?
```

What exactly did we do here? We passed the function `reverser` into
`applyToArray`. JavaScript has **first class functions**, which means functions
are treated like any other variable, and therefore can be passed around as
parameters.

This means we can do almost anything with functions, such as **creating an
array of functions**.

```javascript
function hi() {
    console.log('hi');
}

function bye() {
    console.log('bye');
}

function Benny() {
    console.log('Benny');
}

var funcs = [hi, bye, Benny];

// Exercise: Iterate through this array, and execute each function.
```

We don't have to declare the functions before putting them in the array. We can
define them **inline anonymously**;

```javascript
var funcs = [
    function() {
        console.log('hi');
    },
    function() {
        console.log('bye');
    },
    function() {
        console.log('Benny');
    }
];
```

Now that we know we can use functions in JavaScript, we can go back to our
"name operation" example.

We can use the function `reverser` inside `applyToArray` by passing it in as an
argument, and then calling it just like we would any other function:

```javascript
function reverser(name) {
    console.log(name.split('').reverse().join(''));
}

function applyToArray(operator) {
    operator('Chirag');
}

applyToArray(reverser); // Logs "garihc"
```

Notice how `operator` inside `applyToArray` refers to `reverser`, since we
passed in `reverser` to `applyToArray` as the parameter corresponding to
`operator`.

This is a very powerful construct, and we will use it often throughout this
course.

Next, let's add another parameter to `applyToArray` to take in an array:

```javascript
function greet(name) {
    console.log('Hello ' + name);
}

function reverser(name) {
    console.log(name.split('').reverse().join(''));
}

function applyToArray(arr, operator) {
    var name = arr[0];
    operator(name);
}

var names = ['Benny', 'Chirag', 'Dickerson'];
applyToArray(names, reverser); // Logs "ynneB"
applyToArray(names, greet); // Logs "Hello Benny"
```

We can change the functionality of `applyToArray` just by passing in a different
operator function, allowing it to be very flexible. Now, `applyToArray` can be
used in a variety of situations.

Let's change `applyToArray` to actually run the `operator` over the entire array:
```javascript
function reverser(name) {
    console.log(name.split('').reverse().join(''));
}

function applyToArray(arr, operator) {
    for (var i of arr) {
        operator(i);
    }
}

var names = ['Benny', 'Chirag', 'Dickerson'];
applyToArray(names, reverser);
// Output:
// ynneB
// garihc
// nosrekciD
```

To see how flexible `applyToArray` is, let's use it in another example.

```javascript
var num = [1, 2, 3, 4, 5];
applyToArray(num, function(i) {
    console.log(i * i);
});
// Output:
// 1
// 4
// 9
// 16
// 25
```

There is a function `forEach()` for arrays that applies an inputted function to
each value in the array.

We have basically already implemented this. Try writing your own version of
forEach.

```javascript
var num = [1, 2, 3, 4, 5];

num.forEach(function(val) {
    console.log(val);
});
// Output:
// 1
// 2
// 3
// 4
// 5

// Exercise:
function myForEach(arr, func){
    for (var i of arr) {
        func(i);
    }
}
```

Let's make things a little more interesting. What if I want to save information
about each person's age? We can make an **object**. We can think of objects as
_containers_ which hold multiple values. They are sort of a looser
representation of Java classes.

Let us start by constructing an object.

```javascript
// This is our constructor.
var people = {};
```
Now, we need to insert data into the object.
```javascript
people.Benny = 20;
people.Chirag = 21;
people.Dickerson = 90;

// The following also works.

people['Benny'] = 20;
people['Chirag'] = 21;
people['Dickerson'] = 90;

console.log(people); // logs: { Benny: 20, Chirag: 21, Dickerson: 90 }
```

Note that `Benny`, `Chirag`, and `Dickerson` are the fields of the `people` object.
In general, the best practice for accessing fields is to use the dot notation
for static/hardcoded fields and the bracket notation for dynamic field access.

Similarly, we could have created the object like this.
```javascript
// Just like a hash with key/value pairs.
var people = {
    Benny: 20,
    Chirag: 21,
    Dickerson: 90
};
```
Objects can also be nested within one another. Let's take a look in this context.
```javascript
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
        age: 90,
        gender: 'male'
    }
};

// You can access the interior elements with two ways.
console.log(people['Dickerson']); // logs: { age: 90, gender: 'male' }
console.log(people.Dickerson); // logs: { age: 90, gender: 'male' }
```

If we want to iterate across all the keys, we can do something similar to what
we did in arrays.

```javascript
// Output:
// Benny
// Chirag
// Dickerson
for (var name in people) {
    console.log(name);
}
```

Now, we will print out all of the ages of everyone we have saved.
```javascript
// Output:
// Benny's age is 20.
// Chirag's age is 21.
// Dickerson's age is 90.
for (var name in people) {
	// Note this string interpolation / string literal feature - introduced in ES2015!
    console.log(`${name}'s age is ${people[name].age}.`);
}

// Exercise: Why would doing people.name.age not work?
```

The objects can have values that are functions.
```javascript
people.Dickerson.getAgeSquared = function () {
    return people.Dickerson.age * people.Dickerson.age;
};

console.log(people.Dickerson.getAgeSquared());
// logs: 8100

people.Dickerson.age = 12;

console.log(people.Dickerson.getAgeSquared());
// logs: 144

// Exercise: What would happen if I ran 'people.Dickerson.getAgeSquared = 2' followed by 'people.Dickerson.getAgeSquared()'?

// Could have also done:
// getAgeSquared: function() { return people.Dickerson.age * people.Dickerson.age }
// Exercise: this?
```

Below are two final (difficult!) exercises to solidify your understanding.

```javascript
/*
 * 1. Create a function "add" that would be able to execute "add(2)(4) --> 6".
 * Notice how the arguments are separated by parentheses.
 */
 function add(num) {
     return function(next) {
         return next + num;
     }
 }

/*
 * 2. Create a function add that would successfully be able to execute
 * add(2)(5)(); --> 7
 * add(2)(4)(2)(); --> 8
 * There could be >= 2 numbers in parentheses, and there will always be an empty
 * () at the end.
 */
 function add(num) {
     if (num == undefined) return;
     return function(y){
         if (y == undefined) return num;
         return add(y + num);
    }
 }
 ```

## JavaScript Good Practices

### Equals vs. "Threequals"
JavaScript has both strict and type-converting equality comparison. For strict
equality the objects being compared must have the same type and.

ALWAYS use the strict comparsions over their non-strict variants.
```javascript
3 == 3 // true
3 === 3 // true

3 == '3' // true, EVEN THOUGH THE TYPES ARE DIFFERENT!!
3 === '3' // false

0 == false // true, BECAUSE BOTH ARE FALSY VALUES!
0 === false // false

'0' == false // true
'0' === false // false

null == undefined // true
null === undefined // false
```

### Declaring variables
Never use `var` in your JavaScript code.

Surprised? Why did we introduce variables in JavaScript to you using the `var`
keyword then?

If you look on a JavaScript help website, or Stack Overflow, or any tutorial,
you will probably find them using `var`. So why is `var` so bad then?
What gives?

It turns out that using `var` to declare variables is very unpredictable.
You are used to variable declarations being scoped in the block that they are
defined in:
```java
// Java example...
public void test() {
  for (int i = 0; i < 5; i++) {
    String test = "5";
  }

  System.out.println(test); // Compile error - variable "test" doesn't exist in this scope!
}
```

However, the scope of a variable defined with `var` is *function scope*! Or,
declared outside any function, *global*.

Let's look at some problematic code:
```javascript
function usingVarIsBad() {
  console.log(i); // prints out "undefined" instead of throwing error

  for (var i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  };

  console.log(i); // prints out 3
}
```

Here's the "correct" code:
```javascript
function betterVariableDeclarations() {
  console.log(i); // ReferenceError: i is not defined

  for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
  };

  console.log(i); // ReferenceError: i is not defined
}
```

In large-scale code, using `var` leads to bugs that are very hard to debug,
such as using the same variable twice without you knowing!

`let` is the declaration keyword that you should always be using to avoid
spaghetti code like that. `let` narrows the scope of the variable to
*block-scope*, which is what you are used to using.

Actually, on a better note, use `const` instead! `const` is also block-scoped,
similar to `let`. `const` is a signal that the identifier won’t be reassigned.
`let` is a signal that the variable may be reassigned, such as a counter in a
loop, or a value swap in an algorithm. Always prefer `const` to be as "narrow"
as absolutely possible.
```javascript
function printPalindromicWords(wordsArray) {
	function isPalindrome(word) {
		return word.split('').reverse().join('') === word;
	}

	for (const word of wordsArray) {
		if (isPalindrome(word)) {
			console.log(word);
		}
	}
}
```

Note: `let` and `const` are introduced in ES2015. Check your JavaScript version!
They are relatively new constructs - this is why many (outdated) tutorials out
there still use `var`.

When you are declaring variables, you should be defaulting to `const` 95% of the
time, `let` 5% of the time, and `var` pretty much 0% of the time.
