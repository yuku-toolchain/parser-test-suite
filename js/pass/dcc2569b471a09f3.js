var stack;
stack = Reflect.construct(DisposableStack, [], Object);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    return Array.prototype;
  }
});
stack = Reflect.construct(DisposableStack, [], newTarget);