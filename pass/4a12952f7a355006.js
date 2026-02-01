try {
  1 === y;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}