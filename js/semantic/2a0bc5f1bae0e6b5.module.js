const oldArguments = globalThis.arguments;
let o = {
  async f(p = eval("var arguments = 'param'")) {
    let arguments;
  }
};
o.f().then($DONE, error => {}).then($DONE, $DONE);