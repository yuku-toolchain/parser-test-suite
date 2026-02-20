var callCount = 0;
class C {
  static async *method([cover = function () {}, xCover = (0, function () {})]) {
    callCount = callCount + 1;
  }
}
C.method([]).next().then(() => {}).then($DONE, $DONE);