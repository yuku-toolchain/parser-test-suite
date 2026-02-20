assertNativeFunction(new Proxy(function () {}, {}));
assertNativeFunction(new Proxy(function () {}, {
  apply() {}
}).apply);