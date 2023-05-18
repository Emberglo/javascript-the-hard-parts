function printHello() {
    console.log("Hello");
}

// blocks the JS thread for 1 second - can do this by using a for loop or something like that
function blockFor1Sec()

// sends a message to the browser and sets a timer for given time and passes the reference to the included function
setTimeout(printHello, 0);

// after the timer runs out, printHello gets sent to the Callback Queue

// then blockFor1Sec is called and added to the Call Stack
blockFor1Sec();
// after this runs, it's removed from the call stack

// then console.log runs "Me First"
console.log("Me First!");

// after the console.log("Me First!") runs, printHello is taken from the Callback Queue and added to the Call Stack
// then printHello is run and Hello is logged to the console

// printHello can't ever run until all of the synchronous code has finished running, no matter how much there is.