const fields = ['years', 'months', 'weeks', 'days', 'hours', 'minutes', 'seconds', 'milliseconds', 'microseconds', 'nanoseconds'];
fields.forEach(field => {});
let calls = 0;
const obj = {
  valueOf() {
    calls++;
    return -Infinity;
  }
};
fields.forEach(field => {
  calls = 0;
});