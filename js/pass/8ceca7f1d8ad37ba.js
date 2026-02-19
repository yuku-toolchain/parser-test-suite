var localesInputs = [null, [NaN], ["i"], ["de_DE"]];
var optionsInputs = [{
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
for (const locales of localesInputs) {
  var referenceError, error;
  try {
    var format = new Intl.NumberFormat(locales);
  } catch (e) {
    referenceError = e;
  }
}
for (const options of optionsInputs) {
  var referenceError, error;
  try {
    var format = new Intl.NumberFormat([], options);
  } catch (e) {
    referenceError = e;
  }
}