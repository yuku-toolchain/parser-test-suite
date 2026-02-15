for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 40 * ctor.BYTES_PER_ELEMENT);
  const array = new ctor(rab, 0, 4);
  for (let i = 0; i < 4; ++i) {}
  for (let i = 0; i < 4; ++i) {
    array[i] = MayNeedBigInt(array, i);
  }
  for (let i = 0; i < 4; ++i) {}
  rab.resize(2 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 4; ++i) {}
  for (let i = 0; i < 4; ++i) {
    array[i] = MayNeedBigInt(array, 10);
  }
  rab.resize(4 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 2; ++i) {}
  for (let i = 2; i < 4; ++i) {}
  rab.resize(40 * ctor.BYTES_PER_ELEMENT);
  for (let i = 0; i < 2; ++i) {}
  for (let i = 2; i < 4; ++i) {}
}