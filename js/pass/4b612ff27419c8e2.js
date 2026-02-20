var value;
try {
  value = (0, eval)("return;");
} catch (e) {
  if (e instanceof SyntaxError !== true) {}
}