const oldArguments = globalThis.arguments;
async function f(p = eval("var arguments = 'param'")) {}
f().then($DONE, error => {}).then($DONE, $DONE);