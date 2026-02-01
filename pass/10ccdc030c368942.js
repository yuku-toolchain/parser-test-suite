let count = 0;
var v = 1;
globalThis[Symbol.unscopables] = {
  v: true
};
{
  count++;
  var callCount = 0;
  async function* ref(x) {
    (function () {
      count++;
      with (globalThis) {
        count++;
      }
    })();
    (function () {
      count++;
      var v = x;
      with (globalThis) {
        count++;
        v = 20;
      }
    })();
    callCount = callCount + 1;
  }
  ref(10).next().then(() => {}).then($DONE, $DONE);
  count++;
}