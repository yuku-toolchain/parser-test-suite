function* zip(a, b) {
  for (let i = 0; i < a.length; ++i) {
    yield [i, a[i], b[i]];
  }
}
function compare(actual, expected, message) {
  for (const [i, actualEntry, expectedEntry] of zip(actual, expected)) {}
}
const dtf = new Intl.DateTimeFormat(undefined, {
  hour: "numeric",
  minute: "numeric",
  second: "numeric"
});
const date = Date.now();
const expected = dtf.formatRangeToParts(0, date);
compare(dtf.formatRangeToParts(-0.9, date), expected, "formatRangeToParts(-0.9)");
compare(dtf.formatRangeToParts(-0.5, date), expected, "formatRangeToParts(-0.5)");
compare(dtf.formatRangeToParts(-0.1, date), expected, "formatRangeToParts(-0.1)");
compare(dtf.formatRangeToParts(-Number.MIN_VALUE, date), expected, "formatRangeToParts(-Number.MIN_VALUE)");
compare(dtf.formatRangeToParts(-0, date), expected, "formatRangeToParts(-0)");
compare(dtf.formatRangeToParts(+0, date), expected, "formatRangeToParts(+0)");
compare(dtf.formatRangeToParts(Number.MIN_VALUE, date), expected, "formatRangeToParts(Number.MIN_VALUE)");
compare(dtf.formatRangeToParts(0.1, date), expected, "formatRangeToParts(0.1)");
compare(dtf.formatRangeToParts(0.5, date), expected, "formatRangeToParts(0.5)");
compare(dtf.formatRangeToParts(0.9, date), expected, "formatRangeToParts(0.9)");