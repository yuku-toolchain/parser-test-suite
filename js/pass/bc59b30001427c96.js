assertNativeFunction(new Proxy(({
  method() {}
}).method, {}));
assertNativeFunction(new Proxy(({
  method() {}
}).method, {
  apply() {}
}).apply);