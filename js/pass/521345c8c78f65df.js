const expected = ["get month.valueOf", "call month.valueOf", "get day.valueOf", "call day.valueOf"];
const actual = [];
const args = [TemporalHelpers.toPrimitiveObserver(actual, 2, "month"), TemporalHelpers.toPrimitiveObserver(actual, 1, "day"), "local", TemporalHelpers.toPrimitiveObserver(actual, 1, "year")];