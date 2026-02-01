const oldArguments = globalThis.arguments;
async function f(arguments, p = eval("var arguments")) {}
f().then($DONE, error => {}).then($DONE, $DONE);