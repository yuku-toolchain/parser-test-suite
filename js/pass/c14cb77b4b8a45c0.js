var date = new Date(1999, 9, 10, 10, 10, 10, 10);
var localDate = new Date(date.getTime() - date.getTimezoneOffset() * 60000);