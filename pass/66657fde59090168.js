const springForwardDatetime = new Temporal.ZonedDateTime(954702001_000_000_000n, "America/Vancouver");
const fallBackDatetime = new Temporal.ZonedDateTime(972849601_000_000_000n, "America/Vancouver");
const offset = "ignore";
[[springForwardDatetime, {
  hour: 2,
  minute: 30
}, 954671401_000_000_000n], [fallBackDatetime, {
  hour: 1,
  minute: 30
}, 972808201_000_000_000n]].forEach(([datetime, fields, expected]) => {
  const explicit = datetime.with(fields, {
    offset,
    disambiguation: undefined
  });
  const implicit = datetime.with(fields, {
    offset
  });
});