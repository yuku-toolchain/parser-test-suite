var caught;
var f = () => eval('new.target;');
try {
  f();
} catch (err) {
  caught = err;
}