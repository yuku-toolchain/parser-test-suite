const overflows = ["constrain", "reject"];
const fields = ["years", "months", "weeks", "days", "hours", "minutes", "seconds", "milliseconds", "microseconds", "nanoseconds"];
const instance = Temporal.PlainDate.from({
  year: 2000,
  month: 5,
  day: 2
});
overflows.forEach(overflow => {
  fields.forEach(field => {});
});
let calls = 0;
const obj = {
  valueOf() {
    calls++;
    return Infinity;
  }
};
overflows.forEach(overflow => {
  fields.forEach(field => {
    calls = 0;
  });
});