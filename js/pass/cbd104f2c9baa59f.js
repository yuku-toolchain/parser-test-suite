var timeZoneMinutes = new Date(0).getTimezoneOffset() * -1;
var date, dateStr;
if (timeZoneMinutes > 0) {
  date = new Date(1970, 0, -99999999, 0, 0, 0, 0);
} else {
  date = new Date(1970, 0, -99999999, 0, 0 + timeZoneMinutes + 60, 0, 0);
  dateStr = date.toISOString();
}