for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    lengthTracking[i] = MayNeedBigInt(lengthTracking, i + 1);
  }
  const evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 0;
    }
  };
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const fixedLength = new ctor(rab, 0, 4);
  const evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 3;
    }
  };
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const lengthTracking = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    lengthTracking[i] = MayNeedBigInt(lengthTracking, i + 1);
  }
  const evil = {
    valueOf: () => {
      rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      return 3;
    }
  };
}