function classfactory() {
  return class {
    #x;
    f() {
      this.#x;
    }
  };
}
var C1 = classfactory();
var C2 = classfactory();
var c1 = new C1();
var c2 = new C2();