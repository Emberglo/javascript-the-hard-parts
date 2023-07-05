// Saves display function in global memory
function display(data) {
    console.log(data);
}

// fetch creates a promise object and begins the network request to the given link
const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');

// .then adds the display function to the onFulfilled in the promise object to be run when the data returns from the request
futureData.then(display);

// first thing to happen in the console
console.log("Me First!")

// after the Me First and after the data returns from the fetch, display runs and prints out the response data



// ---------



// example to show how our promise-deferred functionality gets back onto the call stack to be run

function display2 (data) {console.log(data)};

function printHello() {console.log("Hello")};

function blockFor300MS() {} // fictional function that blocks js thread for 300ms

// starts a timer of 0ms and adds printHello to the callback/task queue
setTimeout(printHello, 0);

// creates a promise object and starts the network request for the url
const futureData2 = fetch('https://jsonplaceholder.typicode.com/todos/1');

// adds display2 to the micro task queue to be run as soon as the callstack is empty and the global code is done
futureData2.then(display2);

// opens a new execution context and interupts the JS thread for 300ms
blockFor300MS();

// logs Me First after the thread has been blocked for 300ms
console.log("Me First!");

// Console:
// 302ms - "Me First!"
// 303ms - data from repsonse
// 304ms - "Hello"

// data is logged before Hello because fetch adds display2 to the  micro task queue and that queue is executed before the callback/task queue where printHello was added


// promise error handling

// to add a fucntion to the promise objects onRejection array, you use .catch(func)
// these functions will be run automatically if the promise gets an error back from its network request

// you can also pass two arguements to .then(onFulfilledFunction, onRejectionFunction)