var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
var C = class {
  static async *method({} = obj) {
    callCount = callCount + 1;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);