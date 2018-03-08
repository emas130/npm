var os = require("os");
var timeFormatter = require("./Time");
var colors = require("colors");

function getOSinfo() {
    var type = os.type();
    var time = os.uptime();

    if (type === "Darwin") {
        type = "OSX";
    } else if (type === "Windows_NT") {
        type = "Windows";
    }

    var release = os.release();
    var cpu = os.cpus()[0].model;
    var userInfo = os.userInfo();

    console.log("System:".grey, type);
    console.log(" Release:".red, release);
    console.log("CPU model is:".blue, cpu);
    console.log("Uptime is: ".green + timeFormatter.print(time));
    console.log("User's name is: ".yellow + userInfo.username) 
	console.log("Home dir: ".gray + userInfo.homedir);
}

exports.print = getOSinfo;