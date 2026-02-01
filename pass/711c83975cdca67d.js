var dateValue = 1438560000000;
var oldDate = new Date(dateValue);
oldDate.toString = function () {};
oldDate.valueOf = function () {};
var newDate = new Date(oldDate);