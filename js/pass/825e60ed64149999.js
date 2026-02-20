const actual = [];
const expected = [];
Object.defineProperty(Temporal.PlainDateTime.prototype, "toPlainTime", {
  get() {
    actual.push("get Temporal.PlainDateTime.prototype.toPlainTime");
    return function () {
      actual.push("call Temporal.PlainDateTime.prototype.toPlainTime");
    };
  }
});
const result = Temporal.Now.plainTimeISO("UTC");