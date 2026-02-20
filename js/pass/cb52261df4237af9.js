assertNativeFunction(new Proxy(class {}, {}));
assertNativeFunction(new Proxy(class {}, {
  apply() {}
}).apply);