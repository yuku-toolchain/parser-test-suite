var yieldorder = 0;
var resolveLatePromise;
function resolveLater() {
  return new Promise(resolve => {
    resolveLatePromise = resolve;
  });
}
async function* g() {
  yield resolveLater();
  yield ++yieldorder;
}
var iter = g();
var item1 = iter.next();
var item2 = iter.next();
var item3 = iter.next();
async function awaitnexts() {}
resolveLatePromise(++yieldorder);