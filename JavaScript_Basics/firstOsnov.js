var num = 6;
var str = "JavaScript";
var bool = false;
var undef;

function func(num) {
};
var object = {"name": "Anton", "years": 19, "eyes_color": "blue"}

function onlyNum(num) {
    var type = "Это NULL!";
    if (typeof (num) === "number") {
        type = "Это число!";
    } else if (typeof (num) === "string") {
        type = "Это строка!";
    } else if (typeof (num) === "boolean") {
        type = "Это логический тип!";
    } else if (typeof (num) === "undefined") {
        type = "Это отсутствие примитива!";
    } else if (typeof (num) === "function") {
        type = "Это функция!";
    } else if (typeof (num) === "object") {
        type = "Это объект!";
    }
    console.log(type)
}


onlyNum(undef);
onlyNum(num);
onlyNum(str);
onlyNum(bool);
onlyNum(func);
onlyNum(object);
