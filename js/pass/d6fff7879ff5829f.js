var minimumSignificantDigitsRead = false;
var maximumSignificantDigitsRead = false;
function readMinimumSignificantDigits() {
  minimumSignificantDigitsRead = true;
  return 1;
}
function readMaximumSignificantDigits() {
  maximumSignificantDigitsRead = true;
  return 1;
}
var options = {};
Object.defineProperty(options, "minimumSignificantDigits", {
  get: readMinimumSignificantDigits
});
Object.defineProperty(options, "maximumSignificantDigits", {
  get: readMaximumSignificantDigits
});
new Intl.NumberFormat("de", options);