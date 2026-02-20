var __string = "Boston, MA 02134";
var __matches = ["02134"];
var __re = /([\d]{5})([-\ ]?[\d]{4})?$/g;
__re.lastIndex = __string.length;
if (__string.match(__re).length !== __matches.length) {}
if (__string.match(__re)[0] !== __matches[0]) {}