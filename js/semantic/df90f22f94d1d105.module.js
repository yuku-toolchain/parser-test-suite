const oldArguments = globalThis.arguments;
let o = {
  async *f(p = eval("var arguments")) {
    var arguments;
  }
};