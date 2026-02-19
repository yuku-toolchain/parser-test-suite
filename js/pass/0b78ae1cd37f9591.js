function f_arg() {
  return arguments;
}
if (f_arg().length !== 0) {}
if (f_arg()[0] !== undefined) {}