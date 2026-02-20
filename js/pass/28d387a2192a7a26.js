var arr = (/\x00/).exec("\u0000");
if (arr === null || arr[0] !== "\u0000") {}
var arr = (/\x01/).exec("\u0001");
if (arr === null || arr[0] !== "\u0001") {}
var arr = (/\x0A/).exec("\u000A");
if (arr === null || arr[0] !== "\u000A") {}
var arr = (/\xFF/).exec("\u00FF");
if (arr === null || arr[0] !== "\u00FF") {}