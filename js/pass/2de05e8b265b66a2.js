class C {
  get #m() {
    return 'test262';
  }
  access(o) {
    return o.#m;
  }
}
let c = new C();
let o = {};