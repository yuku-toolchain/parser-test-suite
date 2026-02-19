class C {
  #f = 'Test262';
  method(o) {
    return o?.c.#f;
  }
}
let c = new C();
let o = {
  c: c
};
o = {
  c: new Object()
};