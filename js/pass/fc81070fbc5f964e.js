var functions = {
  toLocaleString: Date.prototype.toLocaleString,
  toLocaleDateString: Date.prototype.toLocaleDateString,
  toLocaleTimeString: Date.prototype.toLocaleTimeString
};
var locales = [null, [NaN], ["i"], ["de_DE"]];
var options = [{
  localeMatcher: null
}, {
  timeZone: "invalid"
}, {
  hour: "long"
}, {
  formatMatcher: "invalid"
}];
Object.getOwnPropertyNames(functions).forEach(function (p) {
  var f = functions[p];
  locales.forEach(function (locales) {
    var referenceError, error;
    try {
      var format = new Intl.DateTimeFormat(locales);
    } catch (e) {
      referenceError = e;
    }
  });
  options.forEach(function (options) {
    var referenceError, error;
    try {
      var format = new Intl.DateTimeFormat([], options);
    } catch (e) {
      referenceError = e;
    }
  });
});