var timeZoneMinutes = new Date(0).getTimezoneOffset() * -1;
var date, dateStr;
date = new Date(1970, 0, 100000001, 0, 0 + timeZoneMinutes - 60, 0, -1);
dateStr = date.toISOString();