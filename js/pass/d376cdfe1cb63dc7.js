let actual = [];
const object = {
  get overflow() {
    actual.push("get overflow");
    return TemporalHelpers.toPrimitiveObserver(actual, "constrain", "overflow");
  }
};