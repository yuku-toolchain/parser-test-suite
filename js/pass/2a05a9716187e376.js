const plainDate = Temporal.PlainDate.from("2020-01-01");
const timeZone = "UTC";
const plainTime = Temporal.PlainTime.from("12:00");
let result = plainDate.toZonedDateTime({
  timeZone,
  plainTime
});
result = plainDate.toZonedDateTime(timeZone);
result = plainDate.toZonedDateTime({
  timeZone,
  plainTime
});
result = plainDate.toZonedDateTime({
  timeZone,
  plainTime: "12:00"
});