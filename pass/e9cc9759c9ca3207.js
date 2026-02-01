function ReadDataFromBuffer(ab, ctor) {
  let result = [];
  const ta = new ctor(ab, 0, ab.byteLength / ctor.BYTES_PER_ELEMENT);
  for (let item of ta) {
    result.push(Number(item));
  }
  return result;
}
function ArrayFillHelper(ta, n, start, end) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    Array.prototype.fill.call(ta, BigInt(n), start, end);
  } else {
    Array.prototype.fill.call(ta, n, start, end);
  }
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  ArrayFillHelper(fixedLength, 1);
  ArrayFillHelper(fixedLengthWithOffset, 2);
  ArrayFillHelper(lengthTracking, 3);
  ArrayFillHelper(lengthTrackingWithOffset, 4);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  ArrayFillHelper(fixedLength, 5);
  ArrayFillHelper(fixedLengthWithOffset, 6);
  ArrayFillHelper(lengthTracking, 7);
  ArrayFillHelper(lengthTrackingWithOffset, 8);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  ArrayFillHelper(fixedLength, 9);
  ArrayFillHelper(fixedLengthWithOffset, 10);
  ArrayFillHelper(lengthTrackingWithOffset, 11);
  ArrayFillHelper(lengthTracking, 12);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  ArrayFillHelper(fixedLength, 13);
  ArrayFillHelper(fixedLengthWithOffset, 14);
  ArrayFillHelper(lengthTracking, 15);
  ArrayFillHelper(lengthTrackingWithOffset, 16);
  ArrayFillHelper(fixedLength, 17, 1, 3);
  ArrayFillHelper(fixedLengthWithOffset, 18, 1, 2);
  ArrayFillHelper(lengthTracking, 19, 1, 3);
  ArrayFillHelper(lengthTrackingWithOffset, 20, 1, 2);
}