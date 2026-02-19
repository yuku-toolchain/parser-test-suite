var f = Object.getOwnPropertyDescriptor({
  get f() {}
}, 'f').get;
Object.defineProperty(f, 'prototype', {
  get: function () {}
});