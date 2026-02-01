const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const ym1 = new Temporal.PlainYearMonth(2026, 1, "gregory", 1);
const ym2 = new Temporal.PlainYearMonth(2026, 2, "gregory", 1);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const timeZoneDisplayName = dtf.formatToParts(Date.UTC(2026, 0, 1)).find(({type}) => {
    return type === 'timeZoneName';
  }).value;
  const result = dtf.formatRange(ym1, ym2);
}