try {
  object instanceof (object = {}, Object);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}