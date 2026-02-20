var date = new Date(Date.UTC(2016, 6, 1));
var returnValue, expected;
returnValue = date.setUTCHours(6);
expected = Date.UTC(2016, 6, 1, 6);
returnValue = date.setUTCHours(-1);
expected = Date.UTC(2016, 5, 30, 23);
returnValue = date.setUTCHours(24);
expected = Date.UTC(2016, 6, 1, 0);