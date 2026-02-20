var invalidValues = [undefined, null, "5", false, {
  valueOf: function () {
    return 5;
  }
}];
var validValues = [5, NaN, -1234567.89, -Infinity];
invalidValues.forEach(function (value) {});
validValues.forEach(function (value) {
  var Constructor = Number;
  var valueResult = Number.prototype.toLocaleString.call(value);
  var objectResult = Number.prototype.toLocaleString.call(new Constructor(value));
});