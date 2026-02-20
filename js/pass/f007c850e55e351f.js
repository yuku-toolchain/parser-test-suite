try {
  ({}) instanceof OBJECT;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}