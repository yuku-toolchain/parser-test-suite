var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setFullYear(2016, 3);
expected = new Date(2016, 3).getTime();
returnValue = date.setFullYear(2016, -1);
expected = new Date(2015, 11).getTime();
returnValue = date.setFullYear(2016, 12);
expected = new Date(2017, 0).getTime();