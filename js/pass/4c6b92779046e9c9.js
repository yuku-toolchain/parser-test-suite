const instance = new Temporal.Instant(0n);
const arg = {};
arg.toString = function () {
  return "1970-01-01T00:00Z";
};
const result = instance.since(arg);
TemporalHelpers.assertDuration(result, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, "result of toString is interpreted as ISO string");