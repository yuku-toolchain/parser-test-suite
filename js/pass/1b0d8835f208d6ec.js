const i32a = new Int32Array(new SharedArrayBuffer(Int32Array.BYTES_PER_ELEMENT * 8));
testWithAtomicsOutOfBoundsIndices(function (IdxGen) {});