var called = false;
var predicate = function () {
  called = true;
  return true;
};
var result = [].find(predicate);