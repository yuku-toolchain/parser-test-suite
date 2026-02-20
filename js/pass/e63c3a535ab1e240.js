var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
class C {
  #method({s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()}) {
    callCount = callCount + 1;
  }
  get method() {
    return this.#method;
  }
}
new C().method({
  s: null,
  u: 0,
  w: false,
  y: ''
});