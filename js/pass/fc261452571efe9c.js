const instance = new Temporal.PlainDate(2000, 1, 1);
const props = {};
props.minute = 30;
const result = instance.toZonedDateTime({
  plainTime: props,
  timeZone: "UTC"
});