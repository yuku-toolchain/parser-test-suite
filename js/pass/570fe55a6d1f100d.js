var __str = "aBc12 def34";
var __pattern = /([a-z]+)([0-9]+)/i;
if (__str.replace(__pattern, __replFN) !== '12aBc def34') {}
function __replFN() {
  return arguments[2] + arguments[1];
}