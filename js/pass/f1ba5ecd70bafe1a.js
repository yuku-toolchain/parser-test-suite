var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setHours(0, 23);
expected = new Date(2016, 6, 1, 0, 23).getTime();
returnValue = date.setHours(0, -1);
expected = new Date(2016, 5, 30, 23, 59).getTime();
returnValue = date.setHours(0, 60);
expected = new Date(2016, 5, 30, 1).getTime();