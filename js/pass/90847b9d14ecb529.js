var sample;
var buffer = new ArrayBuffer(12);
sample = new DataView(buffer, 0);
sample = new DataView(buffer, 8);
sample = new DataView(buffer, 9);
sample = new DataView(buffer, 0, 4);
sample = new DataView(buffer, 0, 3);
sample = new DataView(buffer, 4, 4);
sample = new DataView(buffer, 4, 3);