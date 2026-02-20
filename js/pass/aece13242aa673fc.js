const duration = new Temporal.Duration(1, 0, 0, 0, 24);
const relativeTo = new Temporal.ZonedDateTime(941184000_000_000_000n, "America/Vancouver");
const result = duration.total({
  unit: "days",
  relativeTo
});