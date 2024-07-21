let map = new Map();
map.set("IN", "india");
map.set("USA", "united state");
map.set("Rus", "russia");

// console.log(map);

for (const keys in map) {
    console.log(keys);
}

const myObj = {
    js: "javascript",
    cpp: "c++",
    rb: "ruby"
}

for (const key in myObj) {
    console.log(myObj[ key ]);
}

const arr = [ "jeel1", "jeel2", "urmil1", "urmil2" ]

arr.forEach((y, x, z,) => {
    console.log(y, x, z);
})