var buffer = new ArrayBuffer(3, {
  maxByteLength: 3
});
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    try {
      buffer.resize(2);
    } catch (error) {}
  }
});
var result = Reflect.construct(DataView, [buffer, 1, 1], newTarget);