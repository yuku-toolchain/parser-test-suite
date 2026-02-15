var result;
var obj = {
  *g() {
    function h() {
      yield = 1;
    }
  }
};
result = obj.g().next();