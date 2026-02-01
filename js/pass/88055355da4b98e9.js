class C {
  #m() {
    return this._v;
  }
  getPrivateMethod() {
    return this.#m;
  }
}
let c = new C();
let o1 = {
  _v: 'test262'
};
let o2 = {
  _v: 'foo'
};