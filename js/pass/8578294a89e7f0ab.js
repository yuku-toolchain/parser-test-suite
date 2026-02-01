assertNativeFunction(new Proxy(({
  async method() {}
}).method, {}));
assertNativeFunction(new Proxy(({
  async method() {}
}).method, {
  apply() {}
}).apply);