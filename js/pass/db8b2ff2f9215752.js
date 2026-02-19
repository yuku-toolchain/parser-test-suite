function ReadDataFromBuffer(ab, ctor) {
  let result = [];
  const ta = new ctor(ab, 0, ab.byteLength / ctor.BYTES_PER_ELEMENT);
  for (let item of ta) {
    result.push(Number(item));
  }
  return result;
}
function TypedArrayFillHelper(ta, n, start, end) {
  if (ta instanceof BigInt64Array || ta instanceof BigUint64Array) {
    ta.fill(BigInt(n), start, end);
  } else {
    ta.fill(n, start, end);
  }
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  TypedArrayFillHelper(fixedLength, 1);
  TypedArrayFillHelper(fixedLengthWithOffset, 2);
  TypedArrayFillHelper(lengthTracking, 3);
  TypedArrayFillHelper(lengthTrackingWithOffset, 4);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  TypedArrayFillHelper(lengthTracking, 7);
  TypedArrayFillHelper(lengthTrackingWithOffset, 8);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  TypedArrayFillHelper(lengthTracking, 12);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  TypedArrayFillHelper(fixedLength, 13);
  TypedArrayFillHelper(fixedLengthWithOffset, 14);
  TypedArrayFillHelper(lengthTracking, 15);
  TypedArrayFillHelper(lengthTrackingWithOffset, 16);
  TypedArrayFillHelper(fixedLength, 17, 1, 3);
  TypedArrayFillHelper(fixedLengthWithOffset, 18, 1, 2);
  TypedArrayFillHelper(lengthTracking, 19, 1, 3);
  TypedArrayFillHelper(lengthTrackingWithOffset, 20, 1, 2);
}