var arr = (/\t/).exec("\u0009");
if (arr === null || arr[0] !== "\u0009") {}
var arr = (/\t\t/).exec("a\u0009\u0009b");
if (arr === null || arr[0] !== "\u0009\u0009") {}