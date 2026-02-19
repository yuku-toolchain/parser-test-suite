const dt = new Temporal.PlainDateTime(1976, 11, 18, 14, 23, 30, 123, 456, 789);
[1, 2, 3, 4, 6, 8, 12].forEach(roundingIncrement => {});
["minute", "second"].forEach(smallestUnit => {
  [1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30].forEach(roundingIncrement => {});
});
["millisecond", "microsecond", "nanosecond"].forEach(smallestUnit => {
  [1, 2, 4, 5, 8, 10, 20, 25, 40, 50, 100, 125, 200, 250, 500].forEach(roundingIncrement => {});
});
const nextIncrements = {
  "hour": 24,
  "minute": 60,
  "second": 60,
  "millisecond": 1000,
  "microsecond": 1000,
  "nanosecond": 1000
};
Object.entries(nextIncrements).forEach(([unit, next]) => {});