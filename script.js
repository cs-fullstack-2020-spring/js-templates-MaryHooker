// // console.log("Yoohoo Worldoo")

// # JavaScript Template Strings Practice

// ### Exercise 1:

// Create a variable called ```myName``` and assign it the value of your name as a String. Create a template string to format the output and log it to the console as 

// ```Hi, my name is YOURNAME``` 

// For example, if the variable is equal to ```Kevin``` the output would be ```Hi, my name is Kevin```.


// let myName = "Mary";
// let sentence =
// (
// `
// Hi, my name is ${myName}
// `
// )
// console.log(sentence)

// ### Exercise 2:

// Write a template String that will print out the sum of the 2 variables (do NOT use any other variables).
// ```
// let one = 1;
// let two = 2;
// ```

// Log the sum to the console using your template string to produce ```Your total is: 3```

let one = parseInt(1);
let two = parseInt(2);
let oneAndTwo =
`
Your total is ${one + two};

`
console.log(oneAndTwo)

// ### Challenge:

// Given the Object Literal variable below 
// ```var person = { first_name: 'Chuck', last_name: 'Jones' };```

// Use a template string to print the Person's first and last name for example, ```Welcome to the site Chuck Jones!```

var person = { first_name: 'Chuck', last_name: 'Jones' };

console.log(`Welcome to the site ${person.first_name} ${person.last_name}`);


