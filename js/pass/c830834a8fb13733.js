const instance = new Temporal.ZonedDateTime(1_000_000_000_000_000_000n, "UTC");
TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach(string => {
  let arg = string;
  arg = `T${string}`;
  instance.withPlainTime(arg);
  arg = ` ${string}`;
});
TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(arg => instance.withPlainTime(arg));