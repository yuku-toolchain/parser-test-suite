const epoch = new Temporal.Instant(0n);
const arg = {};
arg.toString = function () {
  return "1970-01-01T00:00Z";
};
const result1 = Temporal.Instant.compare(arg, epoch);
const result2 = Temporal.Instant.compare(epoch, arg);