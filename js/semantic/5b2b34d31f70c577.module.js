const oldArguments = globalThis.arguments;
async function* f(p = eval("var arguments = 'param'")) {
  let arguments;
}