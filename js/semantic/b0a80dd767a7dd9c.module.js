const oldArguments = globalThis.arguments;
let count = 0;
const f = (p = eval("var arguments = 'param'")) => {
  let arguments = "local";
  count++;
};
f();