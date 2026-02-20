var FACTORY;
FACTORY = new Function();
FACTORY.prototype = "error";
try {
  (function () {}) instanceof FACTORY;
} catch (e) {
  if (!(e instanceof TypeError)) {}
}