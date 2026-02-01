function DefinePropertyMayNeedBigInt(ta, index, value) {
  Object.defineProperty(ta, index, {
    value: MayNeedBigInt(ta, value)
  });
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taFull = new ctor(rab, 0);
  DefinePropertyMayNeedBigInt(fixedLength, 0, 1);
  DefinePropertyMayNeedBigInt(fixedLengthWithOffset, 0, 2);
  DefinePropertyMayNeedBigInt(lengthTracking, 1, 3);
  DefinePropertyMayNeedBigInt(lengthTrackingWithOffset, 1, 4);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  DefinePropertyMayNeedBigInt(lengthTracking, 0, 5);
  DefinePropertyMayNeedBigInt(lengthTrackingWithOffset, 0, 6);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  DefinePropertyMayNeedBigInt(lengthTracking, 0, 7);
  rab.resize(0);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  DefinePropertyMayNeedBigInt(fixedLength, 0, 9);
  DefinePropertyMayNeedBigInt(fixedLengthWithOffset, 0, 10);
  DefinePropertyMayNeedBigInt(lengthTracking, 1, 11);
  DefinePropertyMayNeedBigInt(lengthTrackingWithOffset, 2, 12);
  DefinePropertyMayNeedBigInt(lengthTracking, 4, 14);
  DefinePropertyMayNeedBigInt(lengthTrackingWithOffset, 3, 15);
}