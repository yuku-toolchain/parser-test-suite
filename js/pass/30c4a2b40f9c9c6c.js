var date = new Date(Date.UTC(2016, 6));
var returnValue, expected;
returnValue = date.setUTCMonth(6, 6);
expected = Date.UTC(2016, 6, 6);
returnValue = date.setUTCMonth(6, 0);
expected = Date.UTC(2016, 5, 30);
returnValue = date.setUTCMonth(5, 31);
expected = Date.UTC(2016, 6, 1);