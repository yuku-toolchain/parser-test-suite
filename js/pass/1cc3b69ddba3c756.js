var arr = (/\n/).exec("\u000A");
if (arr === null || arr[0] !== "\u000A") {}
var arr = (/\n\n/).exec("a\u000A\u000Ab");
if (arr === null || arr[0] !== "\u000A\u000A") {}