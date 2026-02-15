try {
  x ? true : false;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}