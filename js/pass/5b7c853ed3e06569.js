const datetime = new Temporal.ZonedDateTime(1572757201_000_000_000n, "-03:30");
const explicit = datetime.with({
  minute: 31
}, {
  offset: undefined
});
const implicit = datetime.with({
  minute: 31
}, {});