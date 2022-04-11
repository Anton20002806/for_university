function lg(arr) {
    console.log(arr);
}

function out(arr1) {
    var t = " "
    for (var i = 0; i < arr1.length; i++)
        t += arr1[i] + " ";
    console.log(t);
}

var firstArray = [1, 2, 3, "n", 5, 6, 7, 8, 9, 10];
var secondArray = [1, 2, 3, 4, 5, 6, 7, "n", 9, 10];

///1
function closeToN(arr) {
    return [arr.indexOf("n", 0) - 1, arr.indexOf("n", 0) + 1]
}

//lg(closeToN(firstArray) + " для firstArray.");

//2 не готово
function numbersAfterN(arr) {
    return arr.id(arr.splice(arr.indexOf("n", 0) + 1, arr.length - arr.indexOf("n", 0)));

}

//lg(numbersAfterN(firstArray));

///3
function mergerNumbersAfterN(arr, arr1) {
    return (arr.splice(arr.indexOf("n", 0) + 1, arr.length - arr.indexOf("n", 0)).concat(arr1.slice(0, arr1.indexOf("n", 0))));
}

//lg(mergerNumbersAfterN(firstArray, secondArray));


var arr1 = [1, 2, 3, 4/*...*/];
var arr2 = [];
var fact = 5;

/////2.1 не сделано
function factorial(n) {
    return (factorial(n).length * (n.length - 1));
}

//lg(factorial(arr1));

///2.2
function reverseString(arr) {
    return arr.join('-', arr.reverse());
}

//lg(reverseString(arr1));

//3,1
var str = "?Я?предпочитаю?вести?здоровый?образ?жизни";

function splitStr(str) {
    return (str.split("?").slice(1));
}

//lg(splitStr(str));
//3.2

//4.1
var str2 = "Javascript";

function toCase1(index, str) {
    return (str.slice(0, index) + str[index].toUpperCase() + str.slice(index + 1, str.length));
}

lg(toCase1(4, str2))
///4.2

var underStr2 = "J";

function startOrEnd(str, underStr) {
    return str.startsWith(underStr) || str.endsWith(underStr);
}

lg(startOrEnd(str2, underStr2));