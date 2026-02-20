const instance = new Temporal.PlainDate(2000, 5, 2);
let arg = "2016-12-31T23:59:60";
const result1 = instance.toZonedDateTime({
  plainTime: arg,
  timeZone: "UTC"
});
arg = {
  year: 2016,
  month: 12,
  day: 31,
  hour: 23,
  minute: 59,
  second: 60
};
const result2 = instance.toZonedDateTime({
  plainTime: arg,
  timeZone: "UTC"
});