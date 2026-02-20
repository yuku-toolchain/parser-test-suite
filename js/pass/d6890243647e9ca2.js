class C {
  #f = 'Test262';
  method() {
    let self = this;
    function innerFunction() {
      return self.#f;
    }
    return innerFunction();
  }
}
let c = new C();
let o = {};