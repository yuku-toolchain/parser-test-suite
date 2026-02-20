var buffer = new ArrayBuffer(8);
var sample = new DataView(buffer, 0);
var result;
result = sample.setBigInt64(0, -0x6f80ff08n, true);
result = sample.setBigInt64(0, -0x7ff8070n, true);
result = sample.setBigInt64(0, 0x6f80ff08n, true);
result = sample.setBigInt64(0, 0x8ff806fn, true);
result = sample.setBigInt64(0, 0xf8007f90n, true);
result = sample.setBigInt64(0, 0x907f00f8n, true);