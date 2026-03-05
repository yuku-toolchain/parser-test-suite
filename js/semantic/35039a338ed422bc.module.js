var result;
var g = function* () {
  (function yield() {});
};
result = g().next();