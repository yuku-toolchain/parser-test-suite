const instance = new Temporal.PlainDate(2000, 5, 2);
TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach(string => {
  let arg = string;
  arg = `T${string}`;
  instance.toZonedDateTime({
    plainTime: arg,
    timeZone: "UTC"
  });
  arg = ` ${string}`;
});
TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(arg => instance.toZonedDateTime({
  plainTime: arg,
  timeZone: "UTC"
}));