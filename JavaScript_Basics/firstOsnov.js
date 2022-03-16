var num = 6;
var str = "JavaScript";
var bool = false;
var undef;

function func(num) {
};
var object = {"name": "Anton", "years": 19, "eyes_color": "blue"}

function onlyNum(num) {
    if (typeof (num) === "number") {
        console.log("Это число!");
    } else if (typeof (num) === "string") {
        console.log("Это строка!");
    } else if (typeof (num) === "boolean") {
        console.log("Это логический тип!");
    } else if (typeof (num) === "undefined") {
        console.log("Это отсутствие примитива!");
    } else if (typeof (num) === "function") {
        console.log("Это функция!");
    } else if (typeof (num) === "object") {
        console.log("Это объект!");
    }
}

onlyNum(undef);
onlyNum(num);
onlyNum(str);
onlyNum(bool);
onlyNum(func);
onlyNum(object);
