var arr = (/\u0000/).exec("\u0000");
if (arr === null || arr[0] !== "\u0000") {}
var arr = (/\u0001/).exec("\u0001");
if (arr === null || arr[0] !== "\u0001") {}
var arr = (/\u000A/).exec("\u000A");
if (arr === null || arr[0] !== "\u000A") {}
var arr = (/\u00FF/).exec("\u00FF");
if (arr === null || arr[0] !== "\u00FF") {}
var arr = (/\u0FFF/).exec("\u0FFF");
if (arr === null || arr[0] !== "\u0FFF") {}
var arr = (/\uFFFF/).exec("\uFFFF");
if (arr === null || arr[0] !== "\uFFFF") {}