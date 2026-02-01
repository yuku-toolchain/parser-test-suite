var arr = (/\r/).exec("\u000D");
if (arr === null || arr[0] !== "\u000D") {}
var arr = (/\r\r/).exec("a\u000D\u000Db");
if (arr === null || arr[0] !== "\u000D\u000D") {}