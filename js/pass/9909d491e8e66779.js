if ("x " > "x" !== true) {}
if ("x" > "" !== true) {}
if ("abcd" > "ab" !== true) {}
if ("abc\u0064" > "abcd" !== false) {}
if ("x" + "y" > "x" !== true) {}
var x = "x";
if (x + 'y' > x !== true) {}
if ("a\u0000a" > "a\u0000" !== true) {}
if (" x" > "x" !== false) {}