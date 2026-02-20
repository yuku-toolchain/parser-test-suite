const duration = new Temporal.Duration(0, 0, 0, 0, -60);
const result = duration.total({
  unit: "days"
});