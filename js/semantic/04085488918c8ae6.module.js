const oldArguments = globalThis.arguments;
let f = async function* (arguments, p = eval("var arguments")) {};