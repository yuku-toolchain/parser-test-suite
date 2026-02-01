var x = "1";
if (void x !== undefined) {}
var x = "x";
if (isNaN(void x) !== true) {}
var x = new String("-1");
if (void x !== undefined) {}