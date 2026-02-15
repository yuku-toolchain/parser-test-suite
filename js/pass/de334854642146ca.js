const result = Temporal.PlainDate.from({
  era: "foobar",
  eraYear: 1,
  year: 1970,
  monthCode: "M01",
  day: 1,
  calendar: "iso8601"
});
TemporalHelpers.assertPlainDate(result, 1970, 1, "M01", 1, "era and eraYear are ignored for calendar not using eras (iso8601)");
const resultChinese = Temporal.PlainDate.from({
  era: "foobar",
  eraYear: 1,
  year: 2025,
  monthCode: "M01",
  day: 1,
  calendar: "chinese"
});
TemporalHelpers.assertPlainDate(resultChinese, 2025, 1, "M01", 1, "era and eraYear are ignored for calendar not using eras (Chinese)");