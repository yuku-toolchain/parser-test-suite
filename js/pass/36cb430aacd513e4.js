var arrayBuffer = new ArrayBuffer(8);
var start = 1, end = 12;
var result = arrayBuffer.slice(start, end);
var start = 2, end = 0x100000000;
var result = arrayBuffer.slice(start, end);
var start = 3, end = +Infinity;
var result = arrayBuffer.slice(start, end);