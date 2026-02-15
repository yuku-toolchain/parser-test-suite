const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const ym1 = new Temporal.PlainYearMonth(2026, 1, "gregory", 1);
const ym2 = new Temporal.PlainYearMonth(2026, 2, "gregory", 1);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatRangeToParts(ym1, ym2);
  for (const {type} of result) {}
}