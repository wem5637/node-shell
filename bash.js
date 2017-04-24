var commands = require("./commands");


process.stdout.write('prompt > ');

process.stdin.on('data', function(data) {

	data = data.toString().trim();
    data = data.split(" ");

    var cmd = data.shift().toString().trim(); // remove the newline
    var args = data;


    if (commands[cmd]) {
        commands[cmd](args);


    } else {
        process.stdout.write('\nprompt > ');
    }

});