var __matches = ["ab", "cd"];
var __string = "123456abcde7890";
if (__string.match(/\D{2}/g).length !== 2) {}
for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(/\D{2}/g)[mi] !== __matches[mi]) {}
}