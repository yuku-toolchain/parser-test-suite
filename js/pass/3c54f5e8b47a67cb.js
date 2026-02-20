try {
  x && (x = true);
} catch (e) {
  if (e instanceof ReferenceError !== true) {}
}
if (((y = true) && y) !== true) {}