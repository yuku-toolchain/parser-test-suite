var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setHours(0, 0, 45);
expected = new Date(2016, 6, 1, 0, 0, 45).getTime();
returnValue = date.setHours(0, 0, -1);
expected = new Date(2016, 5, 30, 23, 59, 59).getTime();
returnValue = date.setHours(0, 0, 60);
expected = new Date(2016, 5, 30, 0, 1).getTime();