try {
  false ? true : z;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}