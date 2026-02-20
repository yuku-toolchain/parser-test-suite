var sample;
var buffer = new ArrayBuffer(12);
sample = new DataView(buffer, 0);
sample = new DataView(buffer, 11);
sample = new DataView(buffer, 0, 1);
sample = new DataView(buffer, 4, 1);
sample = new DataView(buffer, 4, 0);