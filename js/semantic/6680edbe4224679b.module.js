const oldArguments = globalThis.arguments;
let o = {
  async *f(arguments, p = eval("var arguments = 'param'")) {}
};