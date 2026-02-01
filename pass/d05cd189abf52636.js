var split = String.prototype.split.bind(this);
var __obj__lim = {
  valueOf: function () {
    return 5;
  }
};
try {
  toString = Object.prototype.toString;
} catch (e) {}
if (toString === Object.prototype.toString) {
  var __class__ = toString();
  var __split = split(eval("\"[\""), __obj__lim);
}