for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const wholeArrayView = new ctor(rab);
  function WriteData() {
    for (let i = 0; i < wholeArrayView.length; ++i) {
      wholeArrayView[i] = MayNeedBigInt(wholeArrayView, 2 * i);
    }
  }
  WriteData();
  fixedLength.reverse();
  fixedLengthWithOffset.reverse();
  lengthTracking.reverse();
  lengthTrackingWithOffset.reverse();
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  WriteData();
  lengthTracking.reverse();
  lengthTrackingWithOffset.reverse();
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  WriteData();
  lengthTracking.reverse();
  rab.resize(0);
  lengthTracking.reverse();
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  WriteData();
  fixedLength.reverse();
  fixedLengthWithOffset.reverse();
  lengthTracking.reverse();
  lengthTrackingWithOffset.reverse();
}