var callCount = 0;
class C {
  *#method({w: {x, y, z} = {
    x: 4,
    y: 5,
    z: 6
  }}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method({
  w: undefined
}).next();