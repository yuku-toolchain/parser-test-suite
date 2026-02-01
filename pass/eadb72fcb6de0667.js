var x = false;
if (((x = true) && x) !== true) {}
var x = false;
if ((x && (x = true)) !== false) {}