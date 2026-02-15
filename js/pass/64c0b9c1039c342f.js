var __matches = ["12", "34", "56", "78", "90"];
var __string = "123456abcde7890";
if (__string.match(/\d{2}/g).length !== 5) {}
for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(/\d{2}/g)[mi] !== __matches[mi]) {}
}