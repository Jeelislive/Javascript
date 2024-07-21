function creatUser(username, score) {
    this.username = username;
    this.score = score;
}

creatUser.prototype.increment = function () {
    this.score++;
}

//we can create our own prototype
creatUser.prototype.printMe = function () {
    console.log(`price is ${ this.score }`);
}

// to add this type if usercreated prototype we have to use new keyword
const chai = new creatUser('chai', 5);
const tea = creatUser('tea', 10);

chai.printMe();


/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/