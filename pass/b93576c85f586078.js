var x = 0, y = 0;
try {
  LABEL1: do {
    x++;
    eval("continue LABEL1");
    y++;
  } while (0);
} catch (e) {
  if (!(e instanceof SyntaxError)) {}
}