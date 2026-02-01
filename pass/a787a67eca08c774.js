const overflows = ["constrain", "reject"];
const fields = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
const instance = Temporal.PlainTime.from({
  hour: 12,
  minute: 34,
  second: 56,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321
});
overflows.forEach(overflow => {
  fields.forEach(field => {});
});
let calls = 0;
const obj = {
  valueOf() {
    calls++;
    return -Infinity;
  }
};
overflows.forEach(overflow => {
  fields.forEach(field => {
    calls = 0;
  });
});