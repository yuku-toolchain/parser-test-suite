var sample;
var buffer = new ArrayBuffer(12);
sample = new DataView(buffer, 0);
sample = new DataView(buffer, 8);
sample = new DataView(buffer, 9);
sample = new DataView(buffer, 0, 8);
sample = new DataView(buffer, 0, 7);
sample = new DataView(buffer, 4, 8);
sample = new DataView(buffer, 4, 7);