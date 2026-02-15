var x = "1";
var y = x--;
if (y !== 1) {}
var x = "x";
var y = x--;
if (isNaN(y) !== true) {}
var x = new String("-1");
var y = x--;
if (y !== -1) {}