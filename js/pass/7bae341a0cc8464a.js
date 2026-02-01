const locale = "en-US-u-ca-gregory";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const md = new Temporal.PlainMonthDay(1, 5, "gregory", 1972);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const timeZoneDisplayName = dtf.formatToParts(Date.UTC(1972, 0, 5)).find(({type}) => {
    return type === 'timeZoneName';
  }).value;
  const result = dtf.format(md);
}