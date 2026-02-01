let createClass = function () {
  return class {
    static set #m(v) {
      this._v = v;
    }
    static access() {
      this.#m = 'test262';
    }
  };
};
let C1 = createClass();
let C2 = createClass();
C1.access();
C2.access();