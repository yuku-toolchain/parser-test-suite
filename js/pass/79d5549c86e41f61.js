var __str = "aBc12 dEf34";
var __pattern = /([a-z]+)([0-9]+)/ig;
if (__str.replace(__pattern, __replFN) !== '12aBc 34dEf') {}
function __replFN() {
  return arguments[2] + arguments[1];
}