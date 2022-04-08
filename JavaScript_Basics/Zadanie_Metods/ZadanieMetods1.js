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
        var newID = this.commands.length + 2 + "-" + arr[1];
        var newEl = {id: newID, command: command}
        this.commands = this.commands.concat(newEl);
    }
    ,

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