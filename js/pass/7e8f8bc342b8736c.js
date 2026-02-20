var caught;
try {
  (0, eval)('super.property;');
} catch (err) {
  caught = err;
}
caught = null;
try {
  ({
    m() {
      (0, eval)('super.property;');
    }
  }).m();
} catch (err) {
  caught = err;
}