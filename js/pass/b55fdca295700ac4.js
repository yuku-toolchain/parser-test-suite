var caught;
var f = () => eval('super();');
try {
  f();
} catch (err) {
  caught = err;
}