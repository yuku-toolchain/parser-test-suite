var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setHours(6);
expected = new Date(2016, 6, 1, 6).getTime();
returnValue = date.setHours(-1);
expected = new Date(2016, 5, 30, 23).getTime();
returnValue = date.setHours(24);
expected = new Date(2016, 6, 1).getTime();