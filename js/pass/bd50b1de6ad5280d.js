var functions = {
  select: Intl.PluralRules.prototype.select,
  resolvedOptions: Intl.PluralRules.prototype.resolvedOptions
};
var invalidTargets = [undefined, null, true, 0, "PluralRules", [], {}];
Object.getOwnPropertyNames(functions).forEach(function (functionName) {
  var f = functions[functionName];
  invalidTargets.forEach(function (target) {});
});