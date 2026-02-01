var buffer = new SharedArrayBuffer(12);
var sample1 = new DataView(buffer, 0);
var sample2 = new DataView(buffer, 4);
var sample3 = new DataView(buffer, 6, 4);
var sample4 = new DataView(buffer, 12);
var sample5 = new DataView(buffer, 0, 2);