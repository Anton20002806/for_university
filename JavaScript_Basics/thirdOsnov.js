var School = {
    class: 25,
    pupils: 45,
    show_about: function (clas, pup) {
        console.log("В школе " + this.school_names + " учится " + clas + " классов по " + pup + " учеников " + "и она имеет " + this.special_school + " специализацию. " + "\nВсего учеников в школе - " + clas + pup + "." + "Школа имеет несколько " + " классных групп " + " одного возраста - " + this.class_names + ".")
    },
    replenishment: function (new_class) {
        School.class += new_class;
        console.log("Изменилось количество классов : " + School.class);
    },
    set property(count) {
        this.pupils = count;
    },
};
Object.defineProperty(School, 'class_names', {
    value: ["А", "Б", "В"],
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(School, 'school_names', {
    value: "ФизТех",
    writable: false,
    enumerable: true,
    configurable: false
});
Object.defineProperty(School, 'special_school', {
    value: "физико-математическую",
    writable: false,
    enumerable: true,
    configurable: false
});
var classf = School.class;
var peoples = School.pupils;
var new_class = 2; //Добавить 2 класса
School.show_about(classf, peoples);
School.replenishment(new_class);
School.property = 50;
console.log("Кол-во учеников в классах сейчас : " + School.pupils);