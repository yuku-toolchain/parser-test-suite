var arr = (/\v/).exec("\u000B");
if (arr === null || arr[0] !== "\u000B") {}
var arr = (/\v\v/).exec("a\u000B\u000Bb");
if (arr === null || arr[0] !== "\u000B\u000B") {}