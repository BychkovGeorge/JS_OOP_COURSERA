/**
 * @param {Number} hours
 * @param {Number} minutes
 * @param {Number} interval
 * @returns {String}
 */

module.exports = function (hours, minutes, interval) {
    minutes = minutes + interval;
    if (minutes > 59){
        while (minutes > 59){
            minutes = minutes - 60;
            hours++;
        }
    }
    if (hours > 23){
        while(hours > 23){
            hours = hours - 24;
        }
    }

    if (hours < 10 )
        hours = "0" + hours;
    else
        hours = hours + '';
    if (minutes < 10)
        minutes = "0" + minutes;
    else
        minutes = '' + minutes;
    return hours + ':' + minutes;
};