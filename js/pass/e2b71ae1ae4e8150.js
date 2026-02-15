const overflowFields = {
  year: 2000,
  month: 13,
  day: 2,
  timeZone: "UTC"
};
const overflowExplicit = Temporal.ZonedDateTime.from(overflowFields, undefined);
const overflowPropertyImplicit = Temporal.ZonedDateTime.from(overflowFields, {});
const overflowImplicit = Temporal.ZonedDateTime.from(overflowFields);
const timeZone = "America/Vancouver";
const disambiguationEarlierFields = {
  timeZone,
  year: 2000,
  month: 10,
  day: 29,
  hour: 1,
  minute: 34,
  second: 56,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321
};
const disambiguationLaterFields = {
  timeZone,
  year: 2000,
  month: 4,
  day: 2,
  hour: 2,
  minute: 34,
  second: 56,
  millisecond: 987,
  microsecond: 654,
  nanosecond: 321
};
[[disambiguationEarlierFields, 972808496987654321n], [disambiguationLaterFields, 954671696987654321n]].forEach(([fields, expected]) => {
  const explicit = Temporal.ZonedDateTime.from(fields, undefined);
  const propertyImplicit = Temporal.ZonedDateTime.from(fields, {});
  const implicit = Temporal.ZonedDateTime.from(fields);
});
const offsetFields = {
  year: 2000,
  month: 5,
  day: 2,
  offset: "+23:59",
  timeZone: "UTC"
};