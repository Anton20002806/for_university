var arr = ["Операционные", "системы", "и", "сети", "."];
//for (var element of arr) {
//    console.log(element);
//}
function printf(arr) {
    var t = " "
    for (var i = 0; i < arr.length; i++)
        t += arr[i] + " ";
    console.log(t);
}

printf(arr)


