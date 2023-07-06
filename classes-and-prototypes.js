// Classes, Prototypes, and Object Oriented Programming

// objects allow us to store data and functionality together - principle of ENCAPSULATION


// this is creating an object literal and prefilling it's properties
const user1 = {
    name: "Will",
    score: 3,
    increment: function() { user1.score++; }
};

// to increment the user's score:
user1.increment();

// creating user2 with dot notation

const user2 = {};

user2.name = "Tim";
user2.score = 6;
user2.increment = () => { user2.score++; };

// key and value pairs also called property name and property value


// creating user3 with object.create - later on will give us more constrol over our object

// no matter what you pass in, object.create always creates an empty object
const user3 = Object.create(null);

user3.name = "Eva";
user3.score = 9;
user3.increment = () => { user3.score++; };

// our code is becoming repatative - breaking DRY principle


// Solution 1 - Generate objects using a function - unusable in actual code as it's not efficient - stores identical code in multiple places and new featues would have to be manually added to every user

function userCreator (name, score) {
    const newUser = {};
    newUser.name = name;
    newUser.score = score;
    newUser.increment = () => { newUser.score++; };

    return newUser;
};

const user4 = userCreator("Ryan", 3);
const user5 = userCreator("Jeff", 5);

user4.increment();


// Solution 2 - Using the Prototype Chain
// store the increment function in just one object and have the interpreter, if it doesn't find the function on a user, look up to that object to see if it's there
// link user and functionStore so the interpreter on not finding .increment on user checks functionStore where it will find it
// make the link with Object.create() technique

function userCreator2 (name, score) {
    // anything passed into Object.create is saved in the __proto__
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
};

// by using Object.create we are creating a link between the created newUser object and the userFunctionStore object
// this link is a hidden property in the newUser object stored as __proto__  with the value being a link to userFunctionStore
// when JS doesn't find a property on an object, it finds the __proto__ property and follows it up to the linked object to look for the property there
const userFunctionStore = {
    // increment and login are METHODS
    increment: () => { this.score++; },
    login: () => { console.log("Logged In"); }
};

const user6 = userCreator2("Will", 3);
const user7 = userCreator2("Tim", 5);
user6.increment();

// when we get the code for the increment function and run it, a property called this is automatically created in the functions local memory
// the this property is automatically assigned the value of whatever is on the left side of the dot, so in this case it's assigned the user1 object
// so, this.score++ translates to user1.score++

// Solution 2 is the core of a useable and practical solution, solutions 3 & 4 will be shortened versions of doing the same thing


// Decaring and calling a new function inside our method increment
// create and invoke a new function (add1) inside increment

function userCreator2 (name, score) {
    // anything passed into Object.create is saved in the __proto__
    const newUser = Object.create(userFunctionStore);
    newUser.name = name;
    newUser.score = score;

    return newUser;
};

const userFunctionStore2 = {
    increment: function () {
        // used to have to do let that = this
        // then inside add1 you would do that.score++ to access the increment function's value of this

        // modern way
        function add1 () { this.score++; };
        // passes the value of the increment function's this to overrides the add functions default value of this.
        add1.call(this);
    }
};

const user8 = userCreator2("Will", 3);
const user9 = userCreator2("Tim", 5);
user8.increment();

