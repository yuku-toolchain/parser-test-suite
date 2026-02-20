var buffer = new ArrayBuffer(4);
var sample = new DataView(buffer, 0);
var result;
result = sample.setFloat32(0, 42, true);
result = sample.setFloat32(0, 1.4441781973331565e-41, true);