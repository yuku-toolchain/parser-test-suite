TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach(string => {
  let arg = string;
  arg = `T${string}`;
  Temporal.PlainTime.from(arg);
  arg = ` ${string}`;
});
TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(arg => Temporal.PlainTime.from(arg));