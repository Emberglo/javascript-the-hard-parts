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