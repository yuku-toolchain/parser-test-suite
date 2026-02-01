let createAndInstantiateClass = function () {
  const C = class {
    set #m(v) {
      this._v = v;
    }
    access(o, v) {
      o.#m = v;
    }
  };
  return new C();
};
let c1 = createAndInstantiateClass();
let c2 = createAndInstantiateClass();
c1.access(c1, 'test262');
c2.access(c2, 'test262');