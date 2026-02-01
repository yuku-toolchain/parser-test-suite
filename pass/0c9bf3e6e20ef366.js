var arrayBuffer = new SharedArrayBuffer(8);
var result;
result = arrayBuffer.slice(0, 4.5);
result = arrayBuffer.slice(0, NaN);