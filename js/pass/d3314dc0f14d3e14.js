var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setSeconds(0, 543);
expected = new Date(2016, 6, 1, 0, 0, 0, 543).getTime();
returnValue = date.setSeconds(0, -1);
expected = new Date(2016, 5, 30, 23, 59, 59, 999).getTime();
returnValue = date.setSeconds(0, 1000);
expected = new Date(2016, 5, 30, 23, 59, 1).getTime();