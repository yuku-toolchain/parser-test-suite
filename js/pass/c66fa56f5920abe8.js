function __func() {}
if (typeof __func.prototype !== 'object') {}
if (__func.prototype.constructor !== __func) {}
var __constructor_was__enumed;
for (__prop in __func.prototype) {
  if (__prop === 'constructor') __constructor_was__enumed = true;
}
if (__constructor_was__enumed) {}