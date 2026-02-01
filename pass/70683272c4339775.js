const instance = new Temporal.Duration(1, 0, 0, 0, 24);
let relativeTo = "2019-11-01T00:00[America/Vancouver]";
const result4 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00Z[America/Vancouver]";
const result5 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00-07:00[America/Vancouver]";
const result6 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00+04:15[America/Vancouver]";