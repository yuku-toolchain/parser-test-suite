var functions = {
  "compare getter": Object.getOwnPropertyDescriptor(Intl.Collator.prototype, "compare").get,
  resolvedOptions: Intl.Collator.prototype.resolvedOptions
};
var invalidTargets = [undefined, null, true, 0, "Collator", [], {}];
Object.getOwnPropertyNames(functions).forEach(function (functionName) {
  var f = functions[functionName];
  invalidTargets.forEach(function (target) {});
});