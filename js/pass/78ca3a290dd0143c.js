const oneHour = 1n * 60n * 60n * 1000n ** 3n;
const minDt = new Temporal.PlainDateTime(-271821, 4, 19, 1, 0, 0, 0, 0, 0);
const minValidDt = new Temporal.PlainDateTime(-271821, 4, 20, 0, 0, 0, 0, 0, 0);
const maxDt = new Temporal.PlainDateTime(275760, 9, 13, 0, 0, 0, 0, 0, 0);
["earlier", "later"].forEach(disambiguation => {
  const zdt = minValidDt.toZonedDateTime("+00", {
    disambiguation
  });
});
["earlier", "later"].forEach(disambiguation => {
  const zdt = minValidDt.toZonedDateTime("-01", {
    disambiguation
  });
});
["earlier", "later"].forEach(disambiguation => {
  const zdt = maxDt.toZonedDateTime("+00");
});
["earlier", "later"].forEach(disambiguation => {
  const zdt = maxDt.toZonedDateTime("+01");
});