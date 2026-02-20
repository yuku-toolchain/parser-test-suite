if ("x" < "x" !== false) {}
if ("x" < "" !== false) {}
if ("abcd" < "ab" !== false) {}
if ("abc\u0064" < "abcd" !== false) {}
if ("x" + "y" < "x" !== false) {}
var x = "x";
if (x + "y" < x !== false) {}