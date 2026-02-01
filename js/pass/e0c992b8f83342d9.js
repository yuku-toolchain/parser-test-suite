var callCount = 0;
class C {
  async *method([cover = function () {}, xCover = (0, function () {})] = []) {
    callCount = callCount + 1;
  }
}
new C().method().next().then(() => {}).then($DONE, $DONE);