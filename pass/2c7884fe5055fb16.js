p1 = "alert";
this.__obj = {
  p1: 1,
  getRight: function () {
    return "right";
  }
};
var getRight = function () {
  return "napravo";
};
resukt = (function () {
  with (__obj) {
    p1 = "w1";
    var getRight = function () {
      return false;
    };
    return p1;
  }
})();
if (p1 !== "alert") {}
if (getRight() !== "napravo") {}
if (__obj.p1 !== "w1") {}
if (__obj.getRight() !== false) {}
if (resukt !== "w1") {}
var resukt;