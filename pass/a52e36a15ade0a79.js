const oldArguments = globalThis.arguments;
let f = async function* f(arguments, p = eval("var arguments")) {};