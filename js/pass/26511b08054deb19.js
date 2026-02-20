var __matches = ["02134", "02134", undefined];
var __re = /([\d]{5})([-\ ]?[\d]{4})?$/;
__re.lastIndex = 0;
var __string = "Boston, MA 02134";
if (__string.match(__re).length !== 3) {}
if (__string.match(__re).index !== __string.lastIndexOf("0")) {}
for (var mi = 0; mi < __matches.length; mi++) {
  if (__string.match(__re)[mi] !== __matches[mi]) {}
}