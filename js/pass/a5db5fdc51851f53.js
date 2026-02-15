var arrayBuffer = new SharedArrayBuffer(8);
var result;
result = arrayBuffer.slice(10, 8);
result = arrayBuffer.slice(0x100000000, 7);
result = arrayBuffer.slice(+Infinity, 6);