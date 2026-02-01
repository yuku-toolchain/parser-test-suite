var err;
function* g() {
  try {
    yield* test262unresolvable;
  } catch (_err) {
    err = _err;
  }
}
var iter = g();
var result;
result = iter.next();