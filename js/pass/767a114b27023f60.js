var callCount = 0;
function* f(x = arguments[2], y = arguments[3], z) {
  callCount = callCount + 1;
}
f(undefined, undefined, 'third', 'fourth').next();