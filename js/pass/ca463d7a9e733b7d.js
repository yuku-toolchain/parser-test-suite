var separator = ["", ""].toLocaleString();
var calls;
Number.prototype.toLocaleString = function () {
  return {
    toString: undefined,
    valueOf: function () {
      calls++;
      return "hacks" + calls;
    }
  };
};
var arr = [42, 0];
var expected = ["hacks1", "hacks2"].join(separator);