var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var callCount = 0;
var C = class {
  *#method({...rest} = o) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
};
new C().method().next();