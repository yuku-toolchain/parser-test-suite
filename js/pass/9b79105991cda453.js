const fillWithIndexes = (ta, length) => {
  for (let i = 0; i < length; ++i) {
    ta[i] = MayNeedBigInt(ta, i);
  }
  return ta;
};
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const evil = () => {
    rab.resize(2 * ctor.BYTES_PER_ELEMENT);
    return 2;
  };
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = fillWithIndexes(new ctor(rab), 4);
  const evil = () => {
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    return 2;
  };
  lengthTracking.copyWithin({
    valueOf: evil
  }, 0);
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = fillWithIndexes(new ctor(rab), 4);
  const evil = () => {
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    return 2;
  };
  lengthTracking.copyWithin(0, {
    valueOf: evil
  });
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = fillWithIndexes(new ctor(rab), 4);
  const evil = () => {
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    return 2;
  };
  lengthTracking.copyWithin({
    valueOf: evil
  }, 1);
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = fillWithIndexes(new ctor(rab), 4);
  const evil = () => {
    rab.resize(3 * ctor.BYTES_PER_ELEMENT);
    return 2;
  };
  lengthTracking.copyWithin(1, {
    valueOf: evil
  });
}