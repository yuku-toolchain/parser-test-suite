var C = class {
  #x = 1;
  x() {
    return this.#x;
  }
};
var c = new C();
var p = new Proxy(c, {});