var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
class C {
  async *method({} = obj) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);