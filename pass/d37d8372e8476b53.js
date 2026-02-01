var buffer = new ArrayBuffer(3, {
  maxByteLength: 3
});
var expectedByteLength;
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    try {
      buffer.resize(2);
      expectedByteLength = 0;
    } catch (error) {
      expectedByteLength = 1;
    }
  }
});
var result = Reflect.construct(DataView, [buffer, 2], newTarget);