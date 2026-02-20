var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setMonth(3);
expected = new Date(2016, 3).getTime();
returnValue = date.setMonth(-1);
expected = new Date(2015, 11).getTime();
returnValue = date.setMonth(12);
expected = new Date(2016, 0).getTime();