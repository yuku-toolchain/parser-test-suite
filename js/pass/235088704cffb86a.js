var arrayBuffer = new ArrayBuffer(8);
var start = 4.5, end = 8;
var result = arrayBuffer.slice(start, end);
var start = NaN, end = 8;
var result = arrayBuffer.slice(start, end);