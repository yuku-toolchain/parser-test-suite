var rangeErrorCases = ["en-us-", "-en-us", "en-us-en-us", "--", "-", "", "-e-"];
rangeErrorCases.forEach(function (re) {});
var typeErrorCases = [null, [null], [undefined], [true], [NaN], [2], [Symbol('foo')]];
typeErrorCases.forEach(function (te) {});