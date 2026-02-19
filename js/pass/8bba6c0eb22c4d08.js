const oldArguments = globalThis.arguments;
let f = async function f(p = eval("var arguments = 'param'")) {};
f().then($DONE, error => {}).then($DONE, $DONE);