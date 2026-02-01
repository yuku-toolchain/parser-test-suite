const ArrayCopyWithinHelper = (ta, ...rest) => {
  Array.prototype.copyWithin.call(ta, ...rest);
};
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taWrite = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(fixedLength, 0, 2);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(fixedLengthWithOffset, 0, 1);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(lengthTracking, 0, 2);
  ArrayCopyWithinHelper(lengthTrackingWithOffset, 0, 1);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 3; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(fixedLength, 0, 1);
  ArrayCopyWithinHelper(fixedLengthWithOffset, 0, 1);
  ArrayCopyWithinHelper(lengthTracking, 0, 1);
  ArrayCopyWithinHelper(lengthTrackingWithOffset, 0, 1);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  taWrite[0] = MayNeedBigInt(taWrite, 0);
  ArrayCopyWithinHelper(fixedLength, 0, 1, 1);
  ArrayCopyWithinHelper(fixedLengthWithOffset, 0, 1, 1);
  ArrayCopyWithinHelper(lengthTrackingWithOffset, 0, 1, 1);
  ArrayCopyWithinHelper(lengthTracking, 0, 0, 1);
  rab.resize(0);
  ArrayCopyWithinHelper(fixedLength, 0, 1, 1);
  ArrayCopyWithinHelper(fixedLengthWithOffset, 0, 1, 1);
  ArrayCopyWithinHelper(lengthTrackingWithOffset, 0, 1, 1);
  ArrayCopyWithinHelper(lengthTracking, 0, 0, 1);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 6; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(fixedLength, 0, 2);
  for (let i = 0; i < 6; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(fixedLengthWithOffset, 0, 1);
  for (let i = 0; i < 6; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(lengthTracking, 0, 2);
  for (let i = 0; i < 6; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, i);
  }
  ArrayCopyWithinHelper(lengthTrackingWithOffset, 0, 1);
}