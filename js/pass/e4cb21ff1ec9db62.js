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
  const fixedLengthSlice = fixedLength.slice();
  const fixedLengthWithOffsetSlice = fixedLengthWithOffset.slice();
  const lengthTrackingSlice = lengthTracking.slice();
  const lengthTrackingWithOffsetSlice = lengthTrackingWithOffset.slice();
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  rab.resize(0);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
}