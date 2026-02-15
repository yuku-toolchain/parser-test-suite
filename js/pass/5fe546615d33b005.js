var date = new Date(Date.UTC(2016, 6));
var returnValue, expected;
returnValue = date.setUTCMilliseconds(333);
expected = Date.UTC(2016, 6, 1, 0, 0, 0, 333);
returnValue = date.setUTCMilliseconds(-1);
expected = Date.UTC(2016, 5, 30, 23, 59, 59, 999);
returnValue = date.setUTCMilliseconds(1000);
expected = Date.UTC(2016, 6, 1);