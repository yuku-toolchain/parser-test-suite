var result;
var obj = {
  *g1() {
    return;
  },
  *g2() {
    return 1;
  }
};
result = obj.g1().next();
result = obj.g2().next();