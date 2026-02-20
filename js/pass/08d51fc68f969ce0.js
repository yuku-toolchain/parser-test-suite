try {
  true ? y : false;
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}