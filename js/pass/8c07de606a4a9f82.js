const locale = "en-US";
const timeZoneNameStyles = ["long", "short", "shortOffset", "longOffset", "shortGeneric", "longGeneric"];
const time = new Temporal.PlainTime(12, 34);
for (const timeZoneNameStyle of timeZoneNameStyles) {
  const dtf = new Intl.DateTimeFormat(locale, {
    timeZoneName: timeZoneNameStyle
  });
  const timeZoneDisplayName = dtf.formatToParts(Date.UTC(1970, 0, 1, 12, 34)).find(({type}) => {
    return type === 'timeZoneName';
  }).value;
  const result = dtf.format(time);
}