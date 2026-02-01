var functions = {
  toLocaleString: Date.prototype.toLocaleString,
  toLocaleDateString: Date.prototype.toLocaleDateString,
  toLocaleTimeString: Date.prototype.toLocaleTimeString
};
var invalidValues = [NaN, Infinity, -Infinity];
Object.getOwnPropertyNames(functions).forEach(function (p) {
  var f = functions[p];
  invalidValues.forEach(function (value) {
    var result = f.call(new Date(value));
  });
});