function DefinePropertiesMayNeedBigInt(ta, index, value) {
  const values = {};
  values[index] = {
    value: MayNeedBigInt(ta, value)
  };
  Object.defineProperties(ta, values);
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taFull = new ctor(rab, 0);
  DefinePropertiesMayNeedBigInt(fixedLength, 0, 1);
  DefinePropertiesMayNeedBigInt(fixedLengthWithOffset, 0, 2);
  DefinePropertiesMayNeedBigInt(lengthTracking, 1, 3);
  DefinePropertiesMayNeedBigInt(lengthTrackingWithOffset, 1, 4);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  DefinePropertiesMayNeedBigInt(lengthTracking, 0, 5);
  DefinePropertiesMayNeedBigInt(lengthTrackingWithOffset, 0, 6);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  DefinePropertiesMayNeedBigInt(lengthTracking, 0, 7);
  rab.resize(0);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  DefinePropertiesMayNeedBigInt(fixedLength, 0, 9);
  DefinePropertiesMayNeedBigInt(fixedLengthWithOffset, 0, 10);
  DefinePropertiesMayNeedBigInt(lengthTracking, 1, 11);
  DefinePropertiesMayNeedBigInt(lengthTrackingWithOffset, 2, 12);
  DefinePropertiesMayNeedBigInt(lengthTracking, 4, 14);
  DefinePropertiesMayNeedBigInt(lengthTrackingWithOffset, 3, 15);
}