try {
  new eval();
} catch (e) {
  if (e instanceof TypeError !== true) {}
}