const oldArguments = globalThis.arguments;
let o = {
  async f(p = eval("var arguments")) {
    function arguments() {}
  }
};
o.f().then($DONE, error => {}).then($DONE, $DONE);