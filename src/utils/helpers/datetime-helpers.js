function compareTime(timeString1, timeString2){
    date1 = new Date(timeString1);
    date2 = new Date(timeString2);
    time1 = date1.getTime();
    time2 = date2.getTime();
    return time1 < time2;
}

module.exports = {
    compareTime
}