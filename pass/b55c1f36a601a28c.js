var wr;
wr = Reflect.construct(WeakRef, [{}], Object);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    return Array.prototype;
  }
});
wr = Reflect.construct(WeakRef, [{}], newTarget);