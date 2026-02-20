function DateValue(year, month, date, hours, minutes, seconds, ms) {
  return new Date(year, month, date, hours, minutes, seconds, ms).valueOf();
}
var x;
x = DateValue(1899, 11, 31);
x = DateValue(1899, 12, 1);
x = DateValue(1900, 0, 1);
x = DateValue(1969, 11, 31);
x = DateValue(1969, 12, 1);
x = DateValue(1970, 0, 1);
x = DateValue(1999, 11, 31);
x = DateValue(1999, 12, 1);
x = DateValue(2000, 0, 1);
x = DateValue(2099, 11, 31);
x = DateValue(2099, 12, 1);
x = DateValue(2100, 0, 1);