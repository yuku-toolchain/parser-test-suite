const dt1 = new Temporal.PlainDateTime(1970, 1, 1);
const dt2 = new Temporal.PlainDateTime(2554, 7, 21, 23, 34, 33, 709, 551, 616);
const result = dt1.until(dt2, {
  largestUnit: "microseconds"
});