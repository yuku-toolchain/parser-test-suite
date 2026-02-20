var arrayBuffer = new ArrayBuffer(8);
var start = 10, end = 8;
var result = arrayBuffer.slice(start, end);
var start = 0x100000000, end = 7;
var result = arrayBuffer.slice(start, end);
var start = +Infinity, end = 6;
var result = arrayBuffer.slice(start, end);