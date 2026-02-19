const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const ym = new Temporal.PlainYearMonth(2026, 1, "gregory", 1);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const result = dtf.formatToParts(ym);
  for (const {type} of result) {}
}