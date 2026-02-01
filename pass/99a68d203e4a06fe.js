const validValues = [new Temporal.ZonedDateTime(1_000_000_000_987_654_321n, "UTC"), "2001-09-09T01:46:40.987654321+00:00[UTC]"];
validValues.forEach(value => {
  const explicit = Temporal.ZonedDateTime.from(value, {
    overflow: undefined
  });
  const implicit = Temporal.ZonedDateTime.from(value, {});
});
const propertyBag = {
  year: 2000,
  month: 15,
  day: 34,
  hour: 12,
  timeZone: "UTC"
};
const explicit = Temporal.ZonedDateTime.from(propertyBag, {
  overflow: undefined
});