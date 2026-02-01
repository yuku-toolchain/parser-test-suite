var callCount = 0;
class C {
  #method({a, b, ...rest} = {
    x: 1,
    y: 2,
    a: 5,
    b: 3
  }) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method();