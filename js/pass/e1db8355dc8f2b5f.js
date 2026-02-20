var C = class {
  #m() {
    return 'Test262';
  }
  method() {
    let self = this;
    function innerFunction() {
      return self.#m();
    }
    return innerFunction();
  }
};
let c = new C();
let o = {};