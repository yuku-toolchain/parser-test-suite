var executed = false;
var C = class {
  #x = eval('executed = true; () => new.target;');
  x() {
    this.#x();
  }
};
var c = new C();