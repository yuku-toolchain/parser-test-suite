var locales = [null, [NaN], ["i"], ["de_DE"]];
var options = [{
  localeMatcher: null
}, {
  usage: "invalid"
}, {
  sensitivity: "invalid"
}];
locales.forEach(function (locales) {
  var referenceError, error;
  try {
    var collator = new Intl.Collator(locales);
  } catch (e) {
    referenceError = e;
  }
});
options.forEach(function (options) {
  var referenceError, error;
  try {
    var collator = new Intl.Collator([], options);
  } catch (e) {
    referenceError = e;
  }
});