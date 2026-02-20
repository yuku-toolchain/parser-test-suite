var __matches = ["02134"];
var __string = "Boston, Mass. 02134";
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/g).length !== 1) {}
if (__string.match(/([\d]{5})([-\ ]?[\d]{4})?$/g)[0] !== __matches[0]) {}