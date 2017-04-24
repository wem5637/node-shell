var fs = require("fs");

var done = function(output) {
    process.stdout.write(output);
    process.stdout.write("\nprompt > ");

}

module.exports = {
    pwd: function() {
        // pwd code
        done(process.cwd());

    },
    date: function() {
        done(new Date().toString());
    },
    ls: function() {
        fs.readdir('.', function(err, files) {
            if (err) throw err;
            var output = "";
            files.forEach(function(file) {
                output += file.toString() + "\n";
                
            })
            done(output);

        });
    },
    echo: function(args) {
        done(args.join(" "));

    },

    cat: function(args) {
        fs.readFile(args[0], (err, data) => {
            var output = "";
            if (err) throw err;
            output += data.toString() + "\n";
            done(output);
        });

    },

    head: function(args) {
        fs.readFile(args[0], (err, data) => {
            if (err) throw err;
            var output="";
            var ok = data.toString().split("\n");
            var count = 0;
            while (count < 5) {
                output += ok[count] + "\n";
                count++;
            }
            done(output);
        });
    },
    tail: function(args) {
        fs.readFile(args[0], (err, data) => {
            if (err) throw err;
            var output = "";
            var ok = data.toString().split("\n");
            var count = ok.length - 1;
            while (count > ok.length - 5) {
                output+=ok[count] + "\n";
                count--;
            }
            done(output);
        });
    }

}
