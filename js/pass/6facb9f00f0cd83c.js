var date = new Date(Date.UTC(2016, 6));
var returnValue, expected;
returnValue = date.setUTCSeconds(0, 543);
expected = Date.UTC(2016, 6, 1, 0, 0, 0, 543);
returnValue = date.setUTCSeconds(0, -1);
expected = Date.UTC(2016, 5, 30, 23, 59, 59, 999);
returnValue = date.setUTCSeconds(0, 1000);
expected = Date.UTC(2016, 5, 30, 23, 59, 1, 0);