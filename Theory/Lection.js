var arrNum = [1, 2, 3, 4, 5];
var arrStr = ["Поешь", "еще", "этих", "французских", "да", "выпей", "же", "чаю"];
var arrCat = [
    "Котик",
    "Котофеевич",
    "Котов",
    "30 см",
    "700 гр",
    "Молоко",
    "Рыбка"
]

function lg(arr) {
    console.log(arr);
}

function out(arr1) {
    var t = " "
    for (var i = 0; i < arr1.length; i++)
        t += arr1[i] + " ";
    console.log(t);
}

//Вывод
//console.log(arrNum.length);//Последнее число массива
//console.log(arrNum.push(6));//Добавление числа в конец массива
//arrNum.pop();//Удаление с конца
//arrNum.unshift(0)//Добавление в начало
//arrNum.shift();//Удаление с начала
////console.log(arrNum);


//Splice()--------удаление элементов с заданого
//arrCat.splice(3, arrCat.length - 3, "Вас", "Приветствует")//удаление(1)начало-(2)Кол-во удаляемых-3(добавление элементов
//lg(arrCat);
//out(arrCat);

//Slice()//concat
//var arrPlus = ["вас", "приветствует"];
//var firstPart = arrCat.slice(0, 3);//Берем элементы с массива с 0 по 3
//out(firstPart.concat(arrPlus));//объединяем массивы

//indexOf lastIndexOf includes----Проверка наличия
//lg(arrNum.indexOf(3, 0))//Ищем 3 с 0элемента(Выводит индекс элемента=3
//lg(arrNum.lastIndexOf(3, 4))//Ищет 3 с конца массива
//lg(arrNum.includes(3.0))//Значение T F

//find(function(item, index, array){})------------------------------------------------------
//var answer = arrNum.find(function (element) {
//    return element % 4 === 0;
//});//Вывод первого элемента которое /4 при findIndex возвращает index элемента
//lg(answer);

//sort--------------------------------------------------------------
var newArr = [4, 6, 2, 10, 8, 1];
var arrStr1 = ["Поешь", "еще", "этих", "французских"]
var arrObject = [
    {id: 2, value: "еще"},
    {id: 4, value: "французских"},
    {id: 1, value: "Поешь"},
    {id: 3, value: "этих"}

]

//function compare(a, b) {
// return a - b;
//  if (a > b) return 1;
// if (a < b) return -1;
//  if (a === b) return 0;
//}
//lg(newArr.sort(compare));//Сортировка

//function compareObj(a, b) {
//   return a.id - b.id;
//}

//lg(arrObject.sort(compareObj))
//lg(arrObject.reverse());//сортировка с последнего элемента
//lg(arrStr1.join("+"));//добавление + между каждым элементом


//reduce(function(previousValue, item, index,array){},[initial])
//var answer = arrStr1.reduce(function (prevValue, element, index, array) {
//    var word = index === array.length - 1 ? element + "." : element + " ";
//    return prevValue + word;
//}, "Предложение: ")
//lg(answer);


//toLowerCase() toUpperCase();
var str = 'JavaScript is simple';
var str2 = 'JavaSCRIPT iS Simple';
lg(str2.toLowerCase() === str.toLowerCase());
lg(str2.toUpperCase());//Большие буквы
lg(str2.toLowerCase());//маленькие буквы
lg(str2.indexOf("iS", 0));
str[10] = "r";//Пропуск(Поиндексно не изменяет)

//IndexOf
//lg(str[11]);//вывод 11 элемента массива
//lg(str.includes("is", 0));///T F на поиск is

//startWits() endWith()
//lg(str.startsWith("Java"));//Поиск элемента с конца
//lg(str.endsWith("simple"));//Поиск элемента с конца

//slice()
lg(str.slice(2, 10));//Забор подстроки


//localeCompare()//сравнение поалфовитно 1 -1 0
var angular = "Angular";
var react = "React";

lg(react.localeCompare(angular));
lg(angular.localeCompare(react));


//split()
var str3 = 'JavaScript is simple';
var newArr2 = str3.split(" ");
lg(newArr2);


//trim
var str4 = '             JavaScript is simple             ';
var strZero = '';
var strNotTrim = '              ';
var strMess = 'Hello!'
lg(str4.trim());

function check(str) {
    if (str.trim() === "") {
        lg("Сообщение пустое");
    } else {
        lg("Новое сообщение " + str)
    }
}

check(strZero);
check(strNotTrim);
check(strMess);