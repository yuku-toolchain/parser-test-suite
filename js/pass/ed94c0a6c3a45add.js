var date = new Date(2016, 6);
var returnValue, expected;
returnValue = date.setDate(6);
expected = new Date(2016, 6, 6).getTime();
returnValue = date.setDate(0);
expected = new Date(2016, 5, 30).getTime();
returnValue = date.setDate(31);
expected = new Date(2016, 6, 1).getTime();