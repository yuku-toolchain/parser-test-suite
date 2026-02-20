if (("1" ? "" : "1") !== "") {}
var y = new String("1");
if (("1" ? y : "") !== y) {}
var y = new String("y");
if ((y ? y : "1") !== y) {}