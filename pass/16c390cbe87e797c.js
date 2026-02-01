const minimumProperties = {
  hour: 0
};
const allProperties = {
  hour: 0,
  minute: 0,
  second: 0,
  millisecond: 0,
  microsecond: 0,
  nanosecond: 0
};
const resultWithout = Temporal.PlainTime.compare(minimumProperties, minimumProperties);
const resultWith = Temporal.PlainTime.compare(allProperties, allProperties);