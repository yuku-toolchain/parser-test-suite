const i64a = new BigInt64Array(new SharedArrayBuffer(BigInt64Array.BYTES_PER_ELEMENT * 8));
testWithAtomicsOutOfBoundsIndices(function (IdxGen) {});