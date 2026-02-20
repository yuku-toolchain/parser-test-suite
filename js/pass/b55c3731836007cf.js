const instance = new Temporal.PlainTime(12, 34, 56, 987, 654, 321);
TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach(string => {
  let arg = string;
  arg = `T${string}`;
  instance.until(arg);
  arg = ` ${string}`;
});
TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(arg => instance.until(arg));