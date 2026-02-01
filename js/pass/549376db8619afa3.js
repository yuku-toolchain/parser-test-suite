const instance = new Temporal.Duration(1, 0, 0, 0, 24);
let relativeTo = "2019-11-01T00:00";
const result1 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00-07:00";
const result2 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00[-07:00]";
const result3 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00Z[-07:00]";
const result4 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00+00:00[UTC]";
const result5 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "2019-11-01T00:00Z";
relativeTo = "2019-11-01T00:00+04:15[UTC]";
relativeTo = "2025-01-01T00:00:00+00:0000";