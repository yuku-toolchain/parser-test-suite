const datetime1 = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 650, 0);
const datetime2 = new Temporal.PlainDateTime(2000, 5, 2, 12, 34, 56, 987, 650, 0, "gregory");
[[datetime1, "2000-05-02T12:34:56.98765"], [datetime2, "2000-05-02T12:34:56.98765[u-ca=gregory]"]].forEach(([datetime, expected]) => {
  const explicit = datetime.toString(undefined);
  const propertyImplicit = datetime.toString({});
  const implicit = datetime.toString();
});