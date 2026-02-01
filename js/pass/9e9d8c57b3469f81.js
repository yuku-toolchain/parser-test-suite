var arrayBuffer = new SharedArrayBuffer(8);
var result;
result = arrayBuffer.slice(4.5, 8);
result = arrayBuffer.slice(NaN, 8);