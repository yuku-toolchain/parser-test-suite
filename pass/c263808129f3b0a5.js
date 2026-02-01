const oldArguments = globalThis.arguments;
const f = (arguments, p = eval("var arguments = 'param'"), q = () => arguments) => {};