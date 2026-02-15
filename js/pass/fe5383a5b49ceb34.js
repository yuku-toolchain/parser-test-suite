const yearmonth1 = new Temporal.PlainYearMonth(2000, 5);
const yearmonth2 = new Temporal.PlainYearMonth(2000, 5, "gregory", 1);
[[yearmonth1, "2000-05"], [yearmonth2, "2000-05-01[u-ca=gregory]"]].forEach(([yearmonth, expected]) => {
  const explicit = yearmonth.toString(undefined);
  const implicit = yearmonth.toString();
});