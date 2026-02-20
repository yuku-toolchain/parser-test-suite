var propKeyEvaluated = false;
var base = {};
var prop = {
  toString: function () {
    propKeyEvaluated = true;
    return 1;
  }
};
--base[prop];