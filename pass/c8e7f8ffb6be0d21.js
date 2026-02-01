const instance = new Temporal.Duration(1, 0, 0, 0, 24);
let relativeTo = {
  year: 2000,
  month: 1,
  day: 1
};
const result = instance.total({
  unit: "days",
  relativeTo
});