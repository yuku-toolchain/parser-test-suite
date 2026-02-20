var separator = ["", ""].toLocaleString();
var calls;
Number.prototype.toLocaleString = function () {
  return {
    toString: function () {
      calls++;
      return "hacks" + calls;
    },
    valueOf: function () {}
  };
};
var arr = [42, 0];
var expected = ["hacks1", "hacks2"].join(separator);