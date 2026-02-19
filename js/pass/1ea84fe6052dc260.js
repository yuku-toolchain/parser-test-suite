var functions = {
  toLocaleString: Date.prototype.toLocaleString,
  toLocaleDateString: Date.prototype.toLocaleDateString,
  toLocaleTimeString: Date.prototype.toLocaleTimeString
};
var invalidValues = [undefined, null, 5, "5", false, {
  valueOf: function () {
    return 5;
  }
}];
Object.getOwnPropertyNames(functions).forEach(function (p) {
  var f = functions[p];
  invalidValues.forEach(function (value) {});
});