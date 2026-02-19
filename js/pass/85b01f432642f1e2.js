var x = true;
if (((x = false) || x) !== false) {}
var x = true;
if ((x || (x = false)) !== true) {}