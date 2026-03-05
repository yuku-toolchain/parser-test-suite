const oldArguments = globalThis.arguments;
let o = {
  async f(arguments, p = eval("var arguments")) {}
};
o.f().then($DONE, error => {}).then($DONE, $DONE);