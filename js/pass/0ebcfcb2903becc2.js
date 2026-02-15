const sab = new SharedArrayBuffer(1024);
const ab = new ArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 2);
testWithBigIntTypedArrayConstructors(function (TA) {
  const view = new TA(sab, 32, 20);
  const control = new TA(ab, 0, 2);
  const values = [10n, -5n, 12345n, 123456789n, BigInt('33'), {
    valueOf: function () {
      return 33n;
    }
  }];
  for (let i = 0; i < values.length; i++) {
    let val = values[i];
    control[0] = val;
  }
  testWithAtomicsInBoundsIndices(function (IdxGen) {
    let Idx = IdxGen(view);
    view.fill(0n);
    Atomics.store(view, Idx, 37n);
  });
});