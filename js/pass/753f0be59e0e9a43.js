var callCount = 0;
class C {
  static async *method({x: y = 33}) {
    callCount = callCount + 1;
  }
}
C.method({}).next().then(() => {}).then($DONE, $DONE);