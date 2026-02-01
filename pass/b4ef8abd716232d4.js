let o = {
  f(p = eval("var arguments = 'param'")) {
    var arguments;
  }
};