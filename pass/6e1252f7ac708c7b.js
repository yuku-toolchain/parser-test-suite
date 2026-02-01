let rab = new ArrayBuffer(3, {
  maxByteLength: 5
});
let ta = new Int8Array(rab, 1);
ta[0] = 11;
ta[1] = 22;
let it = ta.values();
let r;
r = it.next();
r = it.next();
r = it.next();
rab.resize(0);
r = it.next();