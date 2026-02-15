var callCount = 0;
var C = class {
  static async *#method([[x, y, z] = [4, 5, 6]]) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method([[7, 8, 9]]).next().then(() => {}).then($DONE, $DONE);