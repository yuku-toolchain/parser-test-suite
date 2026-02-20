const r = new ShadowRealm();
let myValue;
function blueFn(x) {
  myValue = x;
  return myValue;
}
const redFunction = r.evaluate(`
    var myValue = 'red';
    0, function(cb) {
        cb(42);
        return myValue;
    };
`);