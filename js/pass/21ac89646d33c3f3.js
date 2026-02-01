function* g() {}
async function* asyncg() {
  yield* g();
}
var result = asyncg().next();