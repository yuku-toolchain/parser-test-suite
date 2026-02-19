var __matches = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var __string = "123456abcde7890";
if (__string.match(/\d{1}/g).length !== 10) {}
for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(/\d{1}/g)[mi] !== __matches[mi]) {}
}