// Closure Notes and Examples

// Functions can be returned from other functions

function createFunction() {
    function multiplyBy2 (num) {
        return num * 2;
    }

    return multiplyBy2;
}

// Create an identifier and save the output of another function to it
const generatedFunc = createFunction();

// So, generatedFunc is now a new label for the function that was origionly created as multiplyBy2

// multiplyBy2 is deleted with the local storage of createFunction when it finishes running, 
// but the actual code of multiplyby2 is saved to the generatedFunc label and can be used elsewhere

const result = generatedFunc(3); // returns 6



// Calling a function in the same function call as it was defined

// Explaination in notebook

function outer() {
    let counter = 0;

    function incrementCounter() {
        counter++;
    }

    incrementCounter(); // increases counter to 1
}

outer();


// Calling a function outside of the function call in which it was defined

function outer2() {
    let counter2 = 0;

    function incrementCounter2() {
        counter2++;
    }

    return incrementCounter2;
}

const myNewFunction = outer2();
myNewFunction(); // increments counter2 that was stored in the "backpack" attached to the function definition attached to myNewFunction // counter = 1
myNewFunction(); // data stored in the "backpack" persists, so running this funciton again, results in counter = 2

// anotherFunction and myNewFunction share a backpack because they are both referring to the same code in memory
const anotherFunction = myNewFunction;
anotherFunction(); // increases counter to 3
anotherFunction(); // increases counter to 4

// thirdFucntion gets a new backpack becasue it was created in a separate execution context from myNewFunction
const thirdFunction = outer2();
thirdFunction(); // counter increases to 1
thirdFunction(); // counter increases to 2