const oldArguments = globalThis.arguments;
let f = async function* (p = eval("var arguments")) {};