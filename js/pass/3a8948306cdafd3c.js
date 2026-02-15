var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
var C = class {
  async *method({}) {
    callCount = callCount + 1;
  }
};
new C().method(obj).next().then(() => {}).then($DONE, $DONE);