testWithBigIntTypedArrayConstructors(function (TA) {
  var BPE = TA.BYTES_PER_ELEMENT;
  var ab = new ArrayBuffer(BPE * 4, {
    maxByteLength: BPE * 5
  });
  var array = new TA(ab, BPE);
  var expected = 3;
  try {
    ab.resize(BPE * 5);
    expected = 4;
  } catch (_) {}
  try {
    ab.resize(BPE * 3);
    expected = 2;
  } catch (_) {}
  try {
    ab.resize(BPE * 3 - 1);
    expected = 1;
  } catch (_) {}
  try {
    ab.resize(BPE);
    expected = 0;
  } catch (_) {}
  try {
    ab.resize(0);
    expected = 0;
  } catch (_) {}
});