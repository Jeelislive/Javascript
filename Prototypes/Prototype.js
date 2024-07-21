const myHeroes = [ "Spiderman", "Batman", "Superman" ];

let heroPower = {
    Spiderman: "swing",
    Batman: "fight",
    Superman: "fly"
};

//object.{bydefalut function} called fectory function
// Object.prototype.jeel = function() {
//     console.log("Jeel has all powers");
// };

// heroPower.jeel();
// myHeroes.jeel();

let bros = [ "urmil", "jeel" ];

Array.prototype.jeel = function() {
    console.log("Jeel has all powers from bros");
}

// heroPower.jeel();
 
const account = {
    name: "jeel",
    email: "jeel@gmail.com"
}

const user = {
    isloggdIn: false, 
    isActive : true
}

Object.setPrototypeOf(user, account);
console.log(user.email);


let username = "jeel   ";

String.prototype.trueLength = function () {
    console.log(`${ this }`);
    console.log(`True Length is : ${ this.trim().length}`);
}

username.trueLength();
"urmil".trueLength();