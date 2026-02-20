var functions = {
  "format getter": Object.getOwnPropertyDescriptor(Intl.DateTimeFormat.prototype, "format").get,
  resolvedOptions: Intl.DateTimeFormat.prototype.resolvedOptions
};
var invalidTargets = [undefined, null, true, 0, "DateTimeFormat", [], {}];
Object.getOwnPropertyNames(functions).forEach(function (functionName) {
  var f = functions[functionName];
  invalidTargets.forEach(function (target) {});
});