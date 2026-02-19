var first = true;
var v = {
  [Symbol.toPrimitive]: function () {
    if (first) {
      first = false;
      return "42";
    }
  }
};