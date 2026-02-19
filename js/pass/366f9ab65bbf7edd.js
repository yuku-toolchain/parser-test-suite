const result = Temporal.PlainYearMonth.from({
  era: "foobar",
  eraYear: 1,
  year: 1970,
  monthCode: "M01",
  calendar: "iso8601"
});
TemporalHelpers.assertPlainYearMonth(result, 1970, 1, "M01", "era and eraYear are ignored for calendar not using eras (iso8601)");
const resultChinese = Temporal.PlainYearMonth.from({
  era: "foobar",
  eraYear: 1,
  year: 2025,
  monthCode: "M01",
  calendar: "chinese"
});
TemporalHelpers.assertPlainYearMonth(resultChinese, 2025, 1, "M01", "era and eraYear are ignored for calendar not using eras (Chinese)", undefined, undefined, 29);