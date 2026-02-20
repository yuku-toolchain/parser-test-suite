var elements = ["x = 1;", "x = 2;"];
var nextCount = 0;
var iter = {};
iter[Symbol.iterator] = function () {
  return {
    next: function () {
      var i = nextCount++;
      if (i < elements.length) {
        return {
          done: false,
          value: elements[i]
        };
      }
      return {
        done: true,
        value: undefined
      };
    }
  };
};
var x = "global";
(function () {
  var x = "local";
  eval(...iter);
})();