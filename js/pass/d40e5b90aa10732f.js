testWithBigIntTypedArrayConstructors(function (TA) {
  var BPE = TA.BYTES_PER_ELEMENT;
  var ab = new ArrayBuffer(BPE * 4, {
    maxByteLength: BPE * 5
  });
  var array = new TA(ab, BPE);
  try {
    ab.resize(BPE * 5);
  } catch (_) {}
  try {
    ab.resize(BPE * 3);
  } catch (_) {}
  try {
    ab.resize(BPE * 3 - 1);
  } catch (_) {}
  try {
    ab.resize(BPE);
  } catch (_) {}
  var expected = BPE;
  try {
    ab.resize(0);
    expected = 0;
  } catch (_) {}
});