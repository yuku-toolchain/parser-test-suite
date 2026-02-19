var caught;
try {
  (0, eval)('super();');
} catch (err) {
  caught = err;
}
caught = null;
try {
  ({
    m() {
      (0, eval)('super();');
    }
  }).m();
} catch (err) {
  caught = err;
}