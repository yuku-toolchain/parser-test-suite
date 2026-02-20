var date = new Date(Date.UTC(2016, 6));
var returnValue, expected;
returnValue = date.setUTCMonth(3);
expected = Date.UTC(2016, 3);
returnValue = date.setUTCMonth(-1);
expected = Date.UTC(2015, 11);
returnValue = date.setUTCMonth(12);
expected = Date.UTC(2016, 0);