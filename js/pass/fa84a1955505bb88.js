var C = class {
  static get #f() {
    return 'Test262';
  }
  static access() {
    const self = this;
    function innerFunction() {
      return self.#f;
    }
    return innerFunction();
  }
};