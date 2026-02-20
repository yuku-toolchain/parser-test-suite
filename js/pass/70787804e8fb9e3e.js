assertNativeFunction(new Proxy(async function* () {}, {}));
assertNativeFunction(new Proxy(async function* () {}, {
  apply() {}
}).apply);