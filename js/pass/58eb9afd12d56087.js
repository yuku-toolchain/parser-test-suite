var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setFullYear(2015);
expected = new Date(2015, 6).getTime();