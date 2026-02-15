for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  let resizeWhenConstructorCalled = false;
  class MyArray extends ctor {
    constructor(...params) {
      super(...params);
      if (resizeWhenConstructorCalled) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
    }
  }
  const fixedLength = new MyArray(rab, 0, 4);
  resizeWhenConstructorCalled = true;
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const taWrite = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, 1);
  }
  let resizeWhenConstructorCalled = false;
  class MyArray extends ctor {
    constructor(...params) {
      super(...params);
      if (resizeWhenConstructorCalled) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
    }
  }
  const lengthTracking = new MyArray(rab);
  resizeWhenConstructorCalled = true;
  const a = lengthTracking.slice();
}
for (let ctor of ctors) {
  const rab = CreateResizableArrayBuffer(4 * ctor.BYTES_PER_ELEMENT, 8 * ctor.BYTES_PER_ELEMENT);
  const taWrite = new ctor(rab);
  for (let i = 0; i < 4; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, 1);
  }
  let resizeWhenConstructorCalled = false;
  class MyArray extends ctor {
    constructor(...params) {
      super(...params);
      if (resizeWhenConstructorCalled) {
        rab.resize(2 * ctor.BYTES_PER_ELEMENT);
      }
    }
  }
  const lengthTracking = new MyArray(rab);
  resizeWhenConstructorCalled = true;
  const a = lengthTracking.slice(-3, -1);
}
{
  const rab = CreateResizableArrayBuffer(8, 16);
  const taWrite = new Uint8Array(rab);
  for (let i = 0; i < 8; ++i) {
    taWrite[i] = MayNeedBigInt(taWrite, 255);
  }
  let resizeWhenConstructorCalled = false;
  class MyArray extends Uint16Array {
    constructor(...params) {
      super(...params);
      if (resizeWhenConstructorCalled) {
        rab.resize(5);
      }
    }
  }
  const lengthTracking = new MyArray(rab);
  resizeWhenConstructorCalled = true;
  const a = lengthTracking.slice();
}