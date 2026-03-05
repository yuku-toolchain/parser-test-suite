const oldArguments = globalThis.arguments;
let f = async function (arguments, p = eval("var arguments = 'param'")) {};
f().then($DONE, error => {}).then($DONE, $DONE);