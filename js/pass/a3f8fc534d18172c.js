var separator = ["", ""].toLocaleString();
var calls;
Number.prototype.toLocaleString = function () {
  calls.push(this);
  return "hacks" + calls.length;
};
var arr = [42, 0];
var expected = ["hacks1", "hacks2"].join(separator);