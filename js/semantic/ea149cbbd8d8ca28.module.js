const oldArguments = globalThis.arguments;
async function* f(arguments, p = eval("var arguments = 'param'")) {}