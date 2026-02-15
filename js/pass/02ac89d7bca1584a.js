var locales = [null, [NaN], ["i"], ["de_DE"]];
var options = [{
  localeMatcher: null
}, {
  style: "invalid"
}, {
  style: "currency"
}, {
  style: "currency",
  currency: "ßP"
}, {
  maximumSignificantDigits: -Infinity
}];
locales.forEach(function (locales) {
  var referenceError, error;
  try {
    var format = new Intl.NumberFormat(locales);
  } catch (e) {
    referenceError = e;
  }
});
options.forEach(function (options) {
  var referenceError, error;
  try {
    var format = new Intl.NumberFormat([], options);
  } catch (e) {
    referenceError = e;
  }
});