function CreateSourceProxy(length, rab, resizeTo) {
  return new Proxy({}, {
    get(target, prop, receiver) {
      if (prop == 'length') {
        rab.resize(resizeTo);
        return length;
      }
      return true;
    }
  });
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
}
for (let ctor of ctors) {
  const rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  const resizeTo = 6 * ctor.BYTES_PER_ELEMENT;
}