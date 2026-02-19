var executed = false;
function f() {
  eval("executed = true; this.#x;");
}