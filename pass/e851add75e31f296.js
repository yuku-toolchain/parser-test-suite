try {
  String("a|b")();
} catch (e) {
  if (!(e instanceof TypeError)) {}
}