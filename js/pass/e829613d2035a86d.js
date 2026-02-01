const expected = ["get month.valueOf", "call month.valueOf"];
const actual = [];
const args = [TemporalHelpers.toPrimitiveObserver(actual, 1, "month")];