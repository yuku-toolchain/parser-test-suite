var result;
var g = function* () {
  ({
    get yield() {
      return 1;
    }
  });
};
result = g().next();