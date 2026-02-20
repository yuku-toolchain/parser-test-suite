var sample;
var buffer = new ArrayBuffer(3);
sample = new DataView(buffer, 1, 2);
sample = new DataView(buffer, 1, 0);
sample = new DataView(buffer, 0, 3);
sample = new DataView(buffer, 3, 0);
sample = new DataView(buffer, 0, 1);
sample = new DataView(buffer, 0, 2);