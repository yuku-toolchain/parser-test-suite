var date = new Date(Date.UTC(2016, 6, 1));
var returnValue, expected;
returnValue = date.setUTCHours(0, 0, 45);
expected = Date.UTC(2016, 6, 1, 0, 0, 45);
returnValue = date.setUTCHours(0, 0, -1);
expected = Date.UTC(2016, 5, 30, 23, 59, 59);
returnValue = date.setUTCHours(0, 0, 60);
expected = Date.UTC(2016, 5, 30, 0, 1);