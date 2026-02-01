try {
  this.z;
  z;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}