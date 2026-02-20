let values;
let rab;
let resizeAfter;
let resizeTo;
function ResizeBufferMidIteration(acc, n) {
  return CollectValuesAndResize(n, values, rab, resizeAfter, resizeTo);
}
for (let ctor of ctors) {
  values = [];
  rab = CreateRabForTest(ctor);
  const fixedLength = new ctor(rab, 0, 4);
  resizeAfter = 2;
  resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
  Array.prototype.reduceRight.call(fixedLength, ResizeBufferMidIteration, 'initial value');
}
for (let ctor of ctors) {
  values = [];
  rab = CreateRabForTest(ctor);
  const fixedLengthWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT, 2);
  resizeAfter = 1;
  resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
  Array.prototype.reduceRight.call(fixedLengthWithOffset, ResizeBufferMidIteration, 'initial value');
}
for (let ctor of ctors) {
  values = [];
  rab = CreateRabForTest(ctor);
  const lengthTracking = new ctor(rab, 0);
  resizeAfter = 2;
  resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
  Array.prototype.reduceRight.call(lengthTracking, ResizeBufferMidIteration, 'initial value');
}
for (let ctor of ctors) {
  values = [];
  rab = CreateRabForTest(ctor);
  const lengthTrackingWithOffset = new ctor(rab, 2 * ctor.BYTES_PER_ELEMENT);
  resizeAfter = 1;
  resizeTo = 5 * ctor.BYTES_PER_ELEMENT;
  Array.prototype.reduceRight.call(lengthTrackingWithOffset, ResizeBufferMidIteration, 'initial value');
}