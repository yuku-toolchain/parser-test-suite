function CreateSourceProxy(length, rab, resizeAt, resizeTo) {
  let requestedIndices = [];
  return new Proxy({}, {
    get(target, prop, receiver) {
      if (prop == 'length') {
        return length;
      }
      requestedIndices.push(prop);
      if (requestedIndices.length == resizeAt) {
        rab.resize(resizeTo);
      }
      return true;
    }
  });
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLength = new ctor(rab, 0, 4);
  const resizeAt = 2;
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
  fixedLength.set(CreateSourceProxy(4, rab, resizeAt, resizeTo));
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  const resizeAt = 1;
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
  fixedLengthWithOffset.set(CreateSourceProxy(2, rab, resizeAt, resizeTo));
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  const resizeAt = 2;
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
  lengthTracking.set(CreateSourceProxy(2, rab, resizeAt, resizeTo));
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const resizeAt = 1;
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
  lengthTrackingWithOffset.set(CreateSourceProxy(2, rab, resizeAt, resizeTo));
}