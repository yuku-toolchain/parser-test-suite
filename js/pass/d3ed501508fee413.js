const instance = new Temporal.Instant(0n);
const arg = {};
arg.toString = function () {
  return "1970-01-01T00:00Z";
};
const result = instance.equals(arg);