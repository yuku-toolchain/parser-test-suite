var initCount = 0;
function counter() {
  initCount += 1;
}
var callCount = 0;
var C = class {
  static async *#method({s: t = counter(), u: v = counter(), w: x = counter(), y: z = counter()} = {
    s: null,
    u: 0,
    w: false,
    y: ''
  }) {
    callCount = callCount + 1;
  }
  static get method() {
    return this.#method;
  }
};
C.method().next().then(() => {}).then($DONE, $DONE);