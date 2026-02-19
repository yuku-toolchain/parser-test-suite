var arrayBuffer = new ArrayBuffer(8);
var start = 0, end = 4.5;
var result = arrayBuffer.slice(start, end);
var start = 0, end = NaN;
var result = arrayBuffer.slice(start, end);