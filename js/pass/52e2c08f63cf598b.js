const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const pdt = new Temporal.PlainDateTime(2026, 1, 5, 11, 22);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const timeZoneDisplayName = dtf.formatToParts(Date.UTC(2026, 0, 5, 11, 22)).find(({type}) => {
    return type === 'timeZoneName';
  }).value;
  const result = dtf.format(pdt);
}