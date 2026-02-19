const instance = new Temporal.PlainDate(1989, 1, 7, "japanese");
const result1 = instance.with({
  day: 10
});
const result2 = instance.with({
  month: 2
});