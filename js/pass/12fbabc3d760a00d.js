const oldArguments = globalThis.arguments;
let f = async function (p = eval("var arguments = 'param'")) {};
f().then($DONE, error => {}).then($DONE, $DONE);