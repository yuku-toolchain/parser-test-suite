var arr = (/\0/).exec("\u0000");
if (arr === null || arr[0] !== "\u0000") {}
var arr = new RegExp("\\0").exec("\u0000");
if (arr === null || arr[0] !== "\u0000") {}