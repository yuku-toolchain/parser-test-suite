class S {
  set #m(v) {
    this._v = v;
  }
  superAccess(v) {
    this.#m = v;
  }
}
class C extends S {
  set #m(v) {
    this._u = v;
  }
  access(v) {
    return this.#m = v;
  }
}
let c = new C();
c.access('test262');
c.superAccess('super class');
let s = new S();
s.superAccess('super class');