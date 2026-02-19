const datetime1 = new Temporal.ZonedDateTime(957270896_987_650_000n, "UTC");
const datetime2 = new Temporal.ZonedDateTime(957270896_987_650_000n, "UTC", "gregory");
[[datetime1, "2000-05-02T12:34:56.98765+00:00[UTC]"], [datetime2, "2000-05-02T12:34:56.98765+00:00[UTC][u-ca=gregory]"]].forEach(([datetime, expected]) => {
  const explicit = datetime.toString(undefined);
  const propertyImplicit = datetime.toString({});
  const implicit = datetime.toString();
});