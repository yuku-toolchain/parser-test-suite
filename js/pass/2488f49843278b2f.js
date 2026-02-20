var date = new Date(Date.UTC(2016, 6, 1));
var returnValue, expected;
returnValue = date.setUTCHours(0, 23);
expected = Date.UTC(2016, 6, 1, 0, 23);
returnValue = date.setUTCHours(0, -1);
expected = Date.UTC(2016, 5, 30, 23, 59);
returnValue = date.setUTCHours(0, 60);
expected = Date.UTC(2016, 5, 30, 1);