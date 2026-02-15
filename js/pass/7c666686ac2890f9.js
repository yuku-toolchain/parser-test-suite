function SetNumOrBigInt(target, source, offset) {
  if (target instanceof BigInt64Array || target instanceof BigUint64Array) {
    const bigIntSource = [];
    for (const s of source) {
      bigIntSource.push(BigInt(s));
    }
    source = bigIntSource;
  }
  if (offset == undefined) {
    return target.set(source);
  }
  return target.set(source, offset);
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const lengthTracking = new ctor(rab, 0);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const taFull = new ctor(rab);
  const throwingProxy = new Proxy({}, {
    get(target, prop, receiver) {
      throw new Error('Called getter for ' + prop);
    }
  });
  SetNumOrBigInt(fixedLength, [1, 2]);
  SetNumOrBigInt(fixedLength, [3, 4], 1);
  SetNumOrBigInt(fixedLengthWithOffset, [5, 6]);
  SetNumOrBigInt(fixedLengthWithOffset, [7], 1);
  SetNumOrBigInt(lengthTracking, [8, 9]);
  SetNumOrBigInt(lengthTracking, [10, 11], 1);
  SetNumOrBigInt(lengthTrackingWithOffset, [12, 13]);
  SetNumOrBigInt(lengthTrackingWithOffset, [14], 1);
  rab.resize(3 * ctor.BYTES_PER_ELEMENT);
  SetNumOrBigInt(lengthTracking, [15, 16]);
  SetNumOrBigInt(lengthTracking, [17, 18], 1);
  SetNumOrBigInt(lengthTrackingWithOffset, [19]);
  rab.resize(1 * ctor.BYTES_PER_ELEMENT);
  SetNumOrBigInt(lengthTracking, [20]);
  rab.resize(0);
  rab.resize(6 * ctor.BYTES_PER_ELEMENT);
  SetNumOrBigInt(fixedLength, [21, 22]);
  SetNumOrBigInt(fixedLength, [23, 24], 1);
  SetNumOrBigInt(fixedLengthWithOffset, [25, 26]);
  SetNumOrBigInt(fixedLengthWithOffset, [27], 1);
  SetNumOrBigInt(lengthTracking, [28, 29, 30, 31, 32, 33]);
  SetNumOrBigInt(lengthTracking, [34, 35, 36, 37, 38], 1);
  SetNumOrBigInt(lengthTrackingWithOffset, [39, 40, 41, 42]);
  SetNumOrBigInt(lengthTrackingWithOffset, [43, 44, 45], 1);
}