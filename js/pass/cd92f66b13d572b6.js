try {
  new new String()();
} catch (e) {
  if (!(e instanceof TypeError)) {}
}