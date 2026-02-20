var buffer = new ArrayBuffer(3, {
  maxByteLength: 3
});
var expectedError;
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    try {
      buffer.resize(1);
      expectedError = RangeError;
    } catch (error) {
      expectedError = null;
    }
  }
});
var error = null;
try {
  Reflect.construct(DataView, [buffer, 2], newTarget);
} catch (caught) {
  error = caught.constructor;
}