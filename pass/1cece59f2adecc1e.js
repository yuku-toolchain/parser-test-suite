const yearInstance = new Temporal.Duration(1999);
const monthInstance = new Temporal.Duration(0, 49);
const weekInstance = new Temporal.Duration(0, 0, 1);
const dayInstance = new Temporal.Duration(0, 0, 0, 42);
let relativeTo = new Temporal.PlainDate(2021, 12, 15);
const yearResult = yearInstance.total({
  unit: "days",
  relativeTo
});
const monthResult = monthInstance.total({
  unit: "days",
  relativeTo
});
const weekResult = weekInstance.total({
  unit: "days",
  relativeTo
});
const dayResultWithoutRelative = dayInstance.total({
  unit: "days"
});
const dayResultWithRelative = dayInstance.total({
  unit: "days",
  relativeTo
});