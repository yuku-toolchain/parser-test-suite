var custom = {
  x: 42
};
var newt = new Proxy(function () {}, {
  get(t, p) {
    if (p === 'prototype') {
      return custom;
    }
    return t[p];
  }
});
var obj = Reflect.construct(SuppressedError, [], newt);