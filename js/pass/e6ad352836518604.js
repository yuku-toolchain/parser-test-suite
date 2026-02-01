const fields = ["hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
const instance = Temporal.Instant.fromEpochMilliseconds(10_000);
fields.forEach(field => {});
let calls = 0;
const obj = {
  valueOf() {
    calls++;
    return Infinity;
  }
};
fields.forEach(field => {
  calls = 0;
});