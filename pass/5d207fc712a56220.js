let rab = new ArrayBuffer(3, {
  maxByteLength: 5
});
let ta = new Int8Array(rab);
ta[0] = 11;
ta[1] = 22;
ta[2] = 33;
let it = ta.values();
let r;
r = it.next();
rab.resize(0);
rab.resize(0);
r = it.next();
rab.resize(5);
r = it.next();