try {
  x = 1;
  delete x;
  x;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}