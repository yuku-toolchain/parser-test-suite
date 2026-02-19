var date = new Date(Date.UTC(2016, 6));
var returnValue, expected;
returnValue = date.setUTCSeconds(45);
expected = Date.UTC(2016, 6, 1, 0, 0, 45);
returnValue = date.setUTCSeconds(-1);
expected = Date.UTC(2016, 5, 30, 23, 59, 59);
returnValue = date.setUTCSeconds(60);
expected = Date.UTC(2016, 6);