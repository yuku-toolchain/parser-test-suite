class S {
  get #m() {
    return 'super class';
  }
  superAccess() {
    return this.#m;
  }
}
class C extends S {
  get #m() {
    return 'test262';
  }
  access() {
    return this.#m;
  }
}
let c = new C();
let s = new S();