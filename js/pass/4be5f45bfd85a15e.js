var executed = false;
class C {
  #x = eval('executed = true; () => new.target;');
  x() {
    this.#x();
  }
}
var c = new C();