const instance = new Temporal.Duration(0, 0, 0, 4, 5, 6, 7, 987, 654, 321);
const validUnits = ["day", "hour", "minute", "second", "millisecond", "microsecond", "nanosecond"];
validUnits.forEach(unit => {
  const full = instance.total({
    unit
  });
  const shorthand = instance.total(unit);
});