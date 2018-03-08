function getFormatTime(time) {
    var hours = Math.floor(time / 3600);
    time %= 3600;

    var minutes = Math.floor(time / 60);
    var seconds = (time % 60).toFixed(0);

    return hours + " hours " + minutes + " minutes " + seconds + " seconds.";
}

exports.print = getFormatTime;