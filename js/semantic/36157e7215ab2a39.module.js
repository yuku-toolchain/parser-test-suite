const oldArguments = globalThis.arguments;
let f = async function f(arguments, p = eval("var arguments = 'param'")) {};
f().then($DONE, error => {}).then($DONE, $DONE);