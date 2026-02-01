if ("x" > "x" !== false) {}
if ("" > "x" !== false) {}
if ("ab" > "abcd" !== false) {}
if ("abcd" > "abc\u0064" !== false) {}
if ("x" > "x" + "y" !== false) {}
var x = "x";
if (x > x + "y" !== false) {}