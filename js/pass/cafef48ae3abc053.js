var x;
try {
  eval("x = 1; x\u000A++");
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}