var executed = false;
class C {
  y = eval("executed = true; this.#x;");
}