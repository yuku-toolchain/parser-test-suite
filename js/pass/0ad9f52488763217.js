const O = (primitiveValue, propertyName) => calls => TemporalHelpers.toPrimitiveObserver(calls, primitiveValue, propertyName);
const tests = [["infinite year", [O(-Infinity, "year"), O(1, "month"), () => "iso8601", O(1, "day")], ["get year.valueOf", "call year.valueOf"]], ["infinite month", [O(1970, "year"), O(-Infinity, "month"), () => "iso8601", O(1, "day")], ["get year.valueOf", "call year.valueOf", "get month.valueOf", "call month.valueOf"]], ["infinite day", [O(1970, "year"), O(1, "month"), () => "iso8601", O(-Infinity, "day")], ["get year.valueOf", "call year.valueOf", "get month.valueOf", "call month.valueOf", "get day.valueOf", "call day.valueOf"]]];
for (const [description, args, expected] of tests) {
  const actual = [];
  const args_ = args.map(o => o(actual));
}