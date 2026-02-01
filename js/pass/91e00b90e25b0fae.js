const O = (primitiveValue, propertyName) => calls => TemporalHelpers.toPrimitiveObserver(calls, primitiveValue, propertyName);
const tests = [["infinite month", [O(Infinity, "month"), O(1, "day"), () => "iso8601", O(1, "year")], ["get month.valueOf", "call month.valueOf"]], ["infinite day", [O(2, "month"), O(Infinity, "day"), () => "iso8601", O(1, "year")], ["get month.valueOf", "call month.valueOf", "get day.valueOf", "call day.valueOf"]], ["infinite year", [O(2, "month"), O(1, "day"), () => "iso8601", O(Infinity, "year")], ["get month.valueOf", "call month.valueOf", "get day.valueOf", "call day.valueOf", "get year.valueOf", "call year.valueOf"]]];
for (const [description, args, expected] of tests) {
  const actual = [];
  const args_ = args.map(o => o(actual));
}