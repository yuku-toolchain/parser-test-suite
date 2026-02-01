var caught;
var f = () => eval('super.property;');
try {
  f();
} catch (err) {
  caught = err;
}