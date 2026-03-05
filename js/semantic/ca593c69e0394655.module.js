const oldArguments = globalThis.arguments;
let f = async function* f(p = eval("var arguments")) {
  let arguments;
};