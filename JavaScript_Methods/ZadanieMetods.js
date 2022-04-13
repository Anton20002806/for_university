var lg = console.log
Queue = {
    commands: [
        {id: "1-command", command: "go"},
        {id: "2-command", command: "rotate"},
        {id: "3-command", command: "push"},
        {id: "4-command", command: "pop"},
        {id: "5-command", command: "reverse"},
    ],

    get property() {
        var arr = this.commands[0].command;
        for (var i = 1; i < this.commands.length; i++) {
            var arr2 = this.commands[i].id.split("-");
            var newID = i + "-" + arr2[1];
            this.commands[i - 1].id = newID;
            this.commands[i - 1].command = this.commands[i].command;
        }
        this.commands = this.commands.slice(0, this.commands.length - 1)
        return arr;
    },

    set property(command) {
        var arr = this.commands[0].id.split("-");
        var newID = this.commands.length + 1 + "-" + arr[1];
        var newEl = {id: newID, command: command}
        this.commands = this.commands.concat(newEl);
    },

    showQueue: function () {
        for (var i = 0; i < this.commands.length; i++)
            lg(i + 1 + ". " + this.commands[i].command);
    }

};


Queue.showQueue();
lg(" ");
Queue.property = "push back";
lg(" ");
Queue.showQueue();
lg("");
lg("Первый элемент объекта :")
lg(Queue.property);
lg("");
Queue.showQueue();

/*var HappyBirthday = {
    hDays: [
        {name: "Dave", month: "09", day: "04"},
        {name: "Ann", month: "02", day: "27"},
        {name: "Nik", month: "08", day: "15"},
        {name: "Pul", month: "02", day: "18"},
        {name: "Steven", month: "07", day: "24"},
        {name: "Frank", month: "02", day: "13"},
    ],
    get property() {
        var names = [];
        for (var i = 0; i < this.hDays.length; i++) {
            names.push(this.hDays[i].name);
        }
        return names.join(',')

    },
    set property([name, day]) {
        var split_date = day.split("/");
        if ((Number(split_date[1] < 32) && split_date[1] !== '0') && (Number(split_date[0] < 13) && split_date[0] !== '0')) {

            if (split_date[0].startsWith('0') === false && Number(split_date[0]) < 10)
                split_date[0] = '0' + split_date[0]
            if (split_date[1].startsWith('0') === false && Number(split_date[1]) < 10)
                split_date[1] = '0' + split_date[1]
            this.hDays.push(
                {
                    name: name[0].toUpperCase() + name.slice(1),
                    month: split_date[0],
                    day: split_date[1],
                });
        } else {
            lg("Дата не верная");
        }

    },
    showDaysOnMonth: function (month) {
        var nam = [];
        for (var i = 0; i < this.hDays.length; i++) {
            if (this.hDays[i].month === month)
                nam.push(this.hDays[i].name);
        }
        return nam.join(',')
    },
};
lg(HappyBirthday.property);
lg("День рождения в феврале ------------>");
lg(" ");
lg(HappyBirthday.hDays);
HappyBirthday.property = ["Anton", "02/18"];
lg(HappyBirthday.showDaysOnMonth('02'));*/
