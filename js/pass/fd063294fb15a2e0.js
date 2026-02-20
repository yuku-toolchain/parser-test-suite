const instance = new Temporal.Duration(0);
let relativeTo = '-271821-04-19';
const result1 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "-271821-04-20T00:00+00:00[UTC]";
const result2 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "+275760-09-13";
const result3 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "+275760-09-12T00:00:00+00:00[UTC]";
const result4 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = "+275760-09-12T00:00:01+00:00[UTC]";
relativeTo = {
  year: -271821,
  month: 4,
  day: 19
};
const result5 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = {
  year: 275760,
  month: 9,
  day: 13
};
const result6 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = {
  year: -271821,
  month: 4,
  day: 20,
  hour: 0,
  minute: 0,
  second: 0
};
const result7 = instance.total({
  unit: "days",
  relativeTo
});
relativeTo = {
  year: 275760,
  month: 9,
  day: 12,
  hour: 0,
  minute: 0,
  second: 0,
  timeZone: "UTC"
};
const result8 = instance.total({
  unit: "days",
  relativeTo
});