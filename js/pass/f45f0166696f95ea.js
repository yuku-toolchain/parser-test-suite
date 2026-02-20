var C = class {
  static set #f(v) {
    return this._v = v;
  }
  static Inner = class {
    static access(o) {
      o.#f = 'Test262';
    }
  };
};
C.Inner.access(C);