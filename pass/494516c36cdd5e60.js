var maxMs = 8.64e15;
var date = new Date(maxMs);
var returnValue;
returnValue = date.setSeconds(24 * 60 * 60);
date = new Date(maxMs);
returnValue = date.setSeconds(0, 24 * 60 * 60 * 1000);