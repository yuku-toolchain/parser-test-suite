var x = "1";
if (--x !== 1 - 1) {}
var x = "x";
if (isNaN(--x) !== true) {}
var x = new String("-1");
if (--x !== -1 - 1) {}