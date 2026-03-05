var result;
var obj = {
  *g() {
    (function yield() {});
  }
};
result = obj.g().next();