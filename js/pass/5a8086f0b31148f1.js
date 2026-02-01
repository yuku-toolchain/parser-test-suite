if ("x" < "x " !== true) {}
if ("" < "x" !== true) {}
if ("ab" < "abcd" !== true) {}
if ("abcd" < "abc\u0064" !== false) {}
if ("x" < "x" + "y" !== true) {}
var x = "x";
if (x < x + "y" !== true) {}
if ("a\u0000" < "a\u0000a" !== true) {}
if ("x" < " x" !== false) {}