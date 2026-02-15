this.p1 = "alert";
__obj = {
  p1: 1,
  getRight: function () {
    return "right";
  }
};
getRight = function () {
  return "napravo";
};
try {
  (function () {
    with (__obj) {
      p1 = "w1";
      getRight = function () {
        return false;
      };
      throw p1;
    }
  })();
} catch (e) {
  resukt = p1;
}
if (p1 !== "alert") {}
if (getRight() !== "napravo") {}
if (__obj.p1 !== "w1") {}
if (__obj.getRight() !== false) {}
if (resukt !== "alert") {}
var resukt;