var arrayBuffer = new ArrayBuffer(8);
var start = 2, end = -4;
var result = arrayBuffer.slice(start, end);
var start = 2, end = -10;
var result = arrayBuffer.slice(start, end);
var start = 2, end = -Infinity;
var result = arrayBuffer.slice(start, end);