var __str = "abc12 def34";
var __pattern = /([a-z]+)([0-9]+)/;
if (__str.replace(__pattern, __replFN) !== '12abc def34') {}
function __replFN() {
  return arguments[2] + arguments[1];
}