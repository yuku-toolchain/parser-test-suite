const fields = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
const instance = new Temporal.Duration(1, 2, 3, 4, 5, 6, 7, 987, 654, 321);
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