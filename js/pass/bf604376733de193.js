var result;
var obj = {
  *g() {
    ({
      get yield() {
        return 1;
      }
    });
  }
};
result = obj.g().next();