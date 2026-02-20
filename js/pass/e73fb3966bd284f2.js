var o = {
  a: 3,
  b: 4
};
Object.defineProperty(o, "x", {
  value: 4,
  enumerable: false
});
var callCount = 0;
class C {
  async *method({...rest}) {
    callCount = callCount + 1;
  }
}
new C().method(o).next().then(() => {}).then($DONE, $DONE);