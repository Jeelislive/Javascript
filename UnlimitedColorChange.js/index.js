// generate color

const generateColor = function () {
    const hex = "0123456789ABCDEF";
    let color = "#";  
    for (let i = 0; i < 6; i++){
        color += hex[ Math.floor(Math.random() * 16) ];
    }
    return color;
}

let intervalId;
const startChanginColor = function () {
    const changeMe = function () {
        document.body.style.backgroundColor = generateColor();   
    }
     intervalId = setInterval(changeMe, 1000)
}

const stopChanginColor = function () {
    clearInterval(intervalId);
    intervalId = null;
}

document.querySelector("#start").addEventListener('click', function () {
    startChanginColor();
});

document.querySelector("#stop").addEventListener('click', function () {
    stopChanginColor();
})