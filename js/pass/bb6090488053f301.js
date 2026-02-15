let duration1 = Temporal.Duration.from({
  years: 1,
  seconds: 2 ** 53 - 1
});
let duration2 = Temporal.Duration.from({
  years: 2
});
let relativeTo = new Temporal.PlainDate(2000, 1, 1);