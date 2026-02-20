var buffer = new ArrayBuffer(12);
var sample1 = new DataView(buffer, 0);
var sample2 = new DataView(buffer, 4);
var sample3 = new DataView(buffer, 6, 4);
var sample4 = new DataView(buffer, 12);