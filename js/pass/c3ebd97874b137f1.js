var arrayBuffer = new SharedArrayBuffer(8);
var start = -5, end = 6;
var result = arrayBuffer.slice(start, end);
var start = -12, end = 6;
var result = arrayBuffer.slice(start, end);
var start = -Infinity, end = 6;
var result = arrayBuffer.slice(start, end);