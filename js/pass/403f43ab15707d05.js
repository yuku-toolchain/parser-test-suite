class C {
  set #m(v) {
    this._v = v;
  }
  access(o, v) {
    return o.#m = v;
  }
}
let c = new C();
c.access(c, 'test262');
let o = {};