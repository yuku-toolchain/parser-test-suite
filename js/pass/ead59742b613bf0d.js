var result;
var obj = {
  *g() {
    ({
      yield: 1
    });
  }
};
result = obj.g().next();