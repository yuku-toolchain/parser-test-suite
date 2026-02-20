var accessCount = 0;
var obj = Object.defineProperty({}, 'attr', {
  get: function () {
    accessCount += 1;
  }
});
var callCount = 0;
async function* f({} = obj) {
  callCount = callCount + 1;
}
f().next().then(() => {}).then($DONE, $DONE);