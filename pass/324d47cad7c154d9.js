const oldArguments = globalThis.arguments;
let f = async function f(p = eval("var arguments")) {
  function arguments() {}
};
f().then($DONE, error => {}).then($DONE, $DONE);