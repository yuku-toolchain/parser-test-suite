const oldArguments = globalThis.arguments;
async function f(p = eval("var arguments")) {
  var arguments;
}
f().then($DONE, error => {}).then($DONE, $DONE);