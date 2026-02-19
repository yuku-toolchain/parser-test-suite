assertNativeFunction(new Proxy(() => {}, {}));
assertNativeFunction(new Proxy(() => {}, {
  apply() {}
}).apply);