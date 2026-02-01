const oldArguments = globalThis.arguments;
const f = (p = eval("var arguments = 'param'"), q = () => arguments, arguments) => {};