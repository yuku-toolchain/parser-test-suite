const oldArguments = globalThis.arguments;
let o = {
  async f(arguments, p = eval("var arguments = 'param'")) {}
};
o.f().then($DONE, error => {}).then($DONE, $DONE);