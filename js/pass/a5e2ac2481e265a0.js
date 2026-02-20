var calls = 0;
var newTarget = (function () {}).bind(null);
Object.defineProperty(newTarget, 'prototype', {
  get: function () {
    calls += 1;
  }
});