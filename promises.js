function display(data) {
    console.log(data);
}

const futureData = fetch('https://jsonplaceholder.typicode.com/todos/1');

futureData.then(display);

console.log("Me First!")