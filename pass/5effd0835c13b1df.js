try {
  x && true;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}