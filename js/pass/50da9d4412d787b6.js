var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setMilliseconds(333);
expected = new Date(2016, 6, 1, 0, 0, 0, 333).getTime();
returnValue = date.setMilliseconds(-1);
expected = new Date(2016, 5, 30, 23, 59, 59, 999).getTime();
returnValue = date.setMilliseconds(1000);
expected = new Date(2016, 6, 1).getTime();