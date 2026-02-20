var caught;
try {
  (0, eval)('new.target;');
} catch (err) {
  caught = err;
}
caught = null;
try {
  (function () {
    (0, eval)('new.target;');
  })();
} catch (err) {
  caught = err;
}