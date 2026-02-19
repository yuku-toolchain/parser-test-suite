let x;
var caught;
try {
  (0, eval)('var x;');
} catch (err) {
  caught = err;
}