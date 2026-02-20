var finalizationRegistry;
finalizationRegistry = Reflect.construct(FinalizationRegistry, [function () {}], Object);
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    return Array.prototype;
  }
});
finalizationRegistry = Reflect.construct(FinalizationRegistry, [function () {}], newTarget);