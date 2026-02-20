var maxMs = 8.64e15;
var maxDate = 12;
var maxMonth = 8;
var date = new Date(maxMs);
var returnValue;
returnValue = date.setMonth(maxMonth + 1);
date = new Date(maxMs);
returnValue = date.setMonth(maxMonth, maxDate + 2);