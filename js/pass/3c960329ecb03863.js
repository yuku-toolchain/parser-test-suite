const sab = new SharedArrayBuffer(1024);
const ab = new ArrayBuffer(16);
testWithBigIntTypedArrayConstructors(function (TA) {
  const view = new TA(sab, 32, 20);
  const control = new TA(ab, 0, 2);
  view[8] = 0n;
  view[3] = -5n;
  control[0] = -5n;
  control[0] = 12345n;
  view[3] = 12345n;
  control[0] = 123456789n;
  view[3] = 123456789n;
  testWithAtomicsInBoundsIndices(function (IdxGen) {
    let Idx = IdxGen(view);
    view.fill(0n);
    Atomics.store(view, Idx, 37n);
  });
});