function f_arg(x, y) {
  return arguments;
}
if (f_arg().length !== 0) {}
if (f_arg()[0] !== undefined) {}
if (f_arg.length !== 2) {}