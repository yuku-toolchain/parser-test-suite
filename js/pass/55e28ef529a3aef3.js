let buffer = new ArrayBuffer(1);
let dv = new DataView(buffer, 0);
$DETACHBUFFER(dv.buffer);