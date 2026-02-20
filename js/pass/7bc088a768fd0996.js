const midnight = new Temporal.PlainTime();
TemporalHelpers.ISO.plainTimeStringsAmbiguous().forEach(string => {
  let arg = string;
  arg = `T${string}`;
  Temporal.PlainTime.compare(arg, midnight);
  Temporal.PlainTime.compare(midnight, arg);
  arg = ` ${string}`;
});
TemporalHelpers.ISO.plainTimeStringsUnambiguous().forEach(arg => {
  Temporal.PlainTime.compare(arg, midnight);
  Temporal.PlainTime.compare(midnight, arg);
});