var __matches = ["34", "34", "34"];
var __string = "343443444";
if (__string.match(/34/g).length !== 3) {}
for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(/34/g)[mi] !== __matches[mi]) {}
}