// prmise object represent the eventual completion or failure of an asynchronous operation and its resulting value.

const promiseOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 1 is completed');
        resolve();
    }, 1000);
});

promiseOne.then(function () {
    console.log("promise is consumed");
})

const promiseTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log('Async operation 2 is completed');
        resolve({"username": "jeel", id: "220170116056"});
    }, 1000);
});

promiseTwo.then(function (user) {
    console.log("promise 2 is consumed");
    console.log(user);
})

const promiseOnee = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true;
        if (!error) {
            resolve({ username: "Jeel", id: "220170116056" });
        }
        else {
            reject('error is occured');
        }
    }, 1000);
});

// can't do thhis if you hold that in variable  if you want to details which are coming from inside resolve than you must have to use .than chaining to get details
const user = promiseOnee.then(function (userdetails) {
    return userdetails.username;
})
console.log(user);

//like this..
promiseOnee
    .then(function (userdetails) {
        return userdetails.username;
    }).then(function (username) {
        console.log(username);
    }).catch(function (error) {
        console.log(error);
    }).finally(function () {
        console.log("ye to print hogahi");
    })

// reject is simple you can consider error board
// creating promise using new keyword instance of promise
const promiseFive = new Promise(function (resolve, reject) {
    setTimeout(() => {
            let error = true;
            if (!error) {
                resolve({ username: "javascript", id: "220170116056" });
            }
            else {
                reject('JS error is occured');
            }
        }, 1000);
})

// consuming promise using async await and use try-catch to handle error 
async function consumePromise() {
    try {
        const response = await promiseFive;
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromise();

async function getAllUsers() {
    try {
        const users = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await users.json();
        console.log(data);
    } catch (error) {
        console.log("ERROR", error);
    }
}

getAllUsers();



